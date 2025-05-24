'use client'

import Signals from '../../../components/Signals'

export default function ManageSignals() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-red-500">Manage Signals</h2>
      <Signals showAdminControls={true} />
    </div>
  )
}
