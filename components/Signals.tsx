'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Edit2, Trash2, Plus, Minus, AlertCircle } from 'lucide-react'
import { db } from '../utils/firebase'
import { ref, onValue, push, remove, update, query, DatabaseReference } from 'firebase/database'

interface Signal {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL';
  entry: string;
  takeProfit: string[];
  stopLoss: string;
  createdAt: string;
}

export default function Signals({ showAdminControls = false }) {
  const [signals, setSignals] = useState<Signal[]>([])
  const [editingSignal, setEditingSignal] = useState<Signal | null>(null)
  const [tpCount, setTpCount] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const signalsRef: DatabaseReference = query(ref(db, 'signals'))
    
    const unsubscribe = onValue(signalsRef, (snapshot) => {
      setIsLoading(true)
      try {
        const data = snapshot.val()
        if (data) {
          const signalsList: Signal[] = Object.entries(data)
            .map(([key, value]: [string, any]) => ({
              id: key,
              ...value,
            }))
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setSignals(signalsList)
        } else {
          setSignals([])
        }
      } catch (error) {
        console.error('Error fetching signals:', error)
        setError('Failed to fetch signals. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }, (error) => {
      console.error('Error in onValue:', error)
      setError('An error occurred while fetching signals. Please try again later.')
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleEdit = (signal: Signal) => {
    setEditingSignal(signal)
    setTpCount(signal.takeProfit.length)
  }

  const handleDelete = async (id: string) => {
    try {
      const signalRef = ref(db, `signals/${id}`)
      await remove(signalRef)
    } catch (error) {
      console.error('Error deleting signal:', error)
      setError('Failed to delete signal. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const signalData: Partial<Signal> = Object.fromEntries(formData)

    signalData.takeProfit = Array.from({ length: tpCount }, (_, i) => signalData[`takeProfit${i + 1}`] as string)
    for (let i = 1; i <= 3; i++) {
      delete signalData[`takeProfit${i}`]
    }

    try {
      if (editingSignal) {
        const signalRef = ref(db, `signals/${editingSignal.id}`)
        await update(signalRef, { ...signalData, updatedAt: new Date().toISOString() })
      } else {
        const signalsRef = ref(db, 'signals')
        await push(signalsRef, { ...signalData, createdAt: new Date().toISOString() })
      }
      setEditingSignal(null)
      setTpCount(1)
      e.currentTarget.reset()
    } catch (error) {
      console.error('Error submitting signal:', error)
      setError('Failed to submit signal. Please try again.')
    }
  }

  if (isLoading) {
    return <div className="text-center">Loading signals...</div>
  }

  if (error) {
    return (
      <div className="text-red-500 text-center flex items-center justify-center">
        <AlertCircle className="mr-2" />
        {error}
      </div>
    )
  }

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
        Trading Signals
      </h2>
      {showAdminControls && (
        <form onSubmit={handleSubmit} className="mb-8 bg-gray-800 p-6 rounded-lg border border-red-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="pair"
              placeholder="Pair"
              defaultValue={editingSignal?.pair || ''}
              className="bg-gray-700 text-white p-2 rounded"
              required
            />
            <select
              name="type"
              defaultValue={editingSignal?.type || 'BUY'}
              className="bg-gray-700 text-white p-2 rounded"
            >
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </select>
            <input
              type="text"
              name="entry"
              placeholder="Entry"
              defaultValue={editingSignal?.entry || ''}
              className="bg-gray-700 text-white p-2 rounded"
              required
            />
            {Array.from({ length: tpCount }).map((_, index) => (
              <input
                key={`tp${index + 1}`}
                type="text"
                name={`takeProfit${index + 1}`}
                placeholder={`Take Profit ${index + 1}`}
                defaultValue={editingSignal?.takeProfit[index] || ''}
                className="bg-gray-700 text-white p-2 rounded"
                required
              />
            ))}
            <input
              type="text"
              name="stopLoss"
              placeholder="Stop Loss"
              defaultValue={editingSignal?.stopLoss || ''}
              className="bg-gray-700 text-white p-2 rounded"
              required
            />
          </div>
          <div className="flex items-center mt-4">
            <button
              type="button"
              onClick={() => setTpCount(Math.min(tpCount + 1, 3))}
              className="bg-green-500 text-white p-2 rounded mr-2"
              disabled={tpCount >= 3}
            >
              <Plus size={18} />
            </button>
            <button
              type="button"
              onClick={() => setTpCount(Math.max(tpCount - 1, 1))}
              className="bg-red-500 text-white p-2 rounded mr-4"
              disabled={tpCount <= 1}
            >
              <Minus size={18} />
            </button>
            <span className="text-gray-300">Take Profit Levels: {tpCount}</span>
          </div>
          <button type="submit" className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            {editingSignal ? 'Update Signal' : 'Add Signal'}
          </button>
        </form>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.length === 0 ? (
          <p className="text-center text-gray-400 col-span-3">No signals available at the moment.</p>
        ) : (
          signals.map((signal) => (
            <motion.div
              key={signal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg border border-red-500 shadow-lg hover:shadow-red-500/20 transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-red-500">{signal.pair}</h3>
              <p className={`text-lg font-bold mb-2 ${signal.type === 'BUY' ? 'text-green-500' : 'text-red-500'}`}>
                {signal.type}
              </p>
              <div className="space-y-2">
                <p><span className="font-semibold">Entry:</span> {signal.entry}</p>
                {signal.takeProfit.map((tp, index) => (
                  <p key={index}><span className="font-semibold">Take Profit {index + 1}:</span> {tp}</p>
                ))}
                <p><span className="font-semibold">Stop Loss:</span> {signal.stopLoss}</p>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Posted on: {new Date(signal.createdAt).toLocaleString()}
              </p>
              {showAdminControls && (
                <div className="mt-4 flex justify-end space-x-2">
                  <button onClick={() => handleEdit(signal)} className="text-blue-500 hover:text-blue-600">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDelete(signal.id)} className="text-red-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </section>
  )
}
