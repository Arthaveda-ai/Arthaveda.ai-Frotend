import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', po: 245, invoice: 230 },
  { month: 'Feb', po: 312, invoice: 298 },
  { month: 'Mar', po: 289, invoice: 276 },
  { month: 'Apr', po: 356, invoice: 340 },
  { month: 'May', po: 428, invoice: 415 },
  { month: 'Jun', po: 392, invoice: 380 },
];

export function TrendChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">PO vs Invoice Trends</h3>
        <p className="text-sm text-gray-500">Monthly comparison of purchase orders and invoices</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '14px' }}
            iconType="circle"
          />
          <Line 
            type="monotone" 
            dataKey="po" 
            stroke="#4F46E5" 
            strokeWidth={3}
            dot={{ fill: '#4F46E5', r: 4 }}
            name="Purchase Orders"
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="invoice" 
            stroke="#10B981" 
            strokeWidth={3}
            dot={{ fill: '#10B981', r: 4 }}
            name="Invoices"
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
