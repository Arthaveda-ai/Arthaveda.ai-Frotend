import { AlertTriangle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface Exception {
  id: string;
  poNumber: string;
  invoiceNumber: string;
  vendor: string;
  issue: string;
  amount: string;
  status: 'Matched' | 'Pending' | 'Mismatch' | 'Processing';
  priority: 'High' | 'Medium' | 'Low';
}

const exceptions: Exception[] = [
  {
    id: '1',
    poNumber: 'PO-2024-1832',
    invoiceNumber: 'INV-8472',
    vendor: 'Acme Corp',
    issue: 'Price mismatch',
    amount: '$12,450',
    status: 'Mismatch',
    priority: 'High',
  },
  {
    id: '2',
    poNumber: 'PO-2024-1829',
    invoiceNumber: 'INV-8465',
    vendor: 'TechSupply Inc',
    issue: 'Quantity difference',
    amount: '$8,920',
    status: 'Pending',
    priority: 'Medium',
  },
  {
    id: '3',
    poNumber: 'PO-2024-1845',
    invoiceNumber: 'INV-8478',
    vendor: 'Global Logistics',
    issue: 'Missing PO reference',
    amount: '$5,340',
    status: 'Processing',
    priority: 'Low',
  },
  {
    id: '4',
    poNumber: 'PO-2024-1838',
    invoiceNumber: 'INV-8470',
    vendor: 'Industrial Parts Co',
    issue: 'Tax calculation error',
    amount: '$15,780',
    status: 'Mismatch',
    priority: 'High',
  },
  {
    id: '5',
    poNumber: 'PO-2024-1841',
    invoiceNumber: 'INV-8475',
    vendor: 'Office Supplies Ltd',
    issue: 'Date mismatch',
    amount: '$3,210',
    status: 'Pending',
    priority: 'Low',
  },
];

const statusConfig = {
  Matched: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  Pending: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  Mismatch: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  Processing: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
};

const priorityConfig = {
  High: { bg: 'bg-red-100', text: 'text-red-700' },
  Medium: { bg: 'bg-amber-100', text: 'text-amber-700' },
  Low: { bg: 'bg-gray-100', text: 'text-gray-700' },
};

export function ExceptionTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Exception Review</h3>
            <p className="text-sm text-gray-500">Items requiring attention</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors text-sm font-medium">
            View All
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                PO Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Invoice
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Vendor
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Issue
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {exceptions.map((exception, index) => (
              <motion.tr
                key={exception.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{exception.poNumber}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{exception.invoiceNumber}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{exception.vendor}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {exception.priority === 'High' && (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-sm text-gray-600">{exception.issue}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{exception.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`
                    inline-flex px-2.5 py-1 rounded-lg text-xs font-medium
                    ${priorityConfig[exception.priority].bg}
                    ${priorityConfig[exception.priority].text}
                  `}>
                    {exception.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`
                    inline-flex px-3 py-1 rounded-lg text-xs font-medium border
                    ${statusConfig[exception.status].bg}
                    ${statusConfig[exception.status].text}
                    ${statusConfig[exception.status].border}
                  `}>
                    {exception.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
