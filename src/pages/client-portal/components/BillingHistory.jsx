import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const BillingHistory = ({ billingData, onDownloadReceipt, onViewDetails }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const { invoices, paymentMethods, totalSpent, averageSpent } = billingData;

  const periodOptions = [
    { value: 'all', label: 'All Time' },
    { value: 'thisMonth', label: 'This Month' },
    { value: 'lastMonth', label: 'Last Month' },
    { value: 'last3Months', label: 'Last 3 Months' },
    { value: 'thisYear', label: 'This Year' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'paid', label: 'Paid' },
    { value: 'pending', label: 'Pending' },
    { value: 'overdue', label: 'Overdue' },
    { value: 'refunded', label: 'Refunded' }
  ];

  const filteredInvoices = invoices?.filter(invoice => {
    const statusMatch = selectedStatus === 'all' || invoice?.status === selectedStatus;
    // Add period filtering logic here if needed
    return statusMatch;
  });

  const getStatusColor = (status) => {
    const colors = {
      'paid': 'text-success bg-success/10',
      'pending': 'text-warning bg-warning/10',
      'overdue': 'text-error bg-error/10',
      'refunded': 'text-accent bg-accent/10'
    };
    return colors?.[status] || 'text-muted-foreground bg-muted/10';
  };

  const getStatusIcon = (status) => {
    const icons = {
      'paid': 'CheckCircle',
      'pending': 'Clock',
      'overdue': 'AlertCircle',
      'refunded': 'RotateCcw'
    };
    return icons?.[status] || 'Circle';
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
          <Icon name="CreditCard" size={24} className="text-primary" />
          Billing & Payments
        </h2>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-panel p-6 rounded-xl morph-hover">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-muted-foreground">Total Spent</h3>
            <Icon name="TrendingUp" size={20} className="text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground font-headline">
            ${totalSpent?.toLocaleString()}
          </div>
          <p className="text-sm text-muted-foreground mt-1">All time</p>
        </div>

        <div className="glass-panel p-6 rounded-xl morph-hover">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-muted-foreground">Average Visit</h3>
            <Icon name="BarChart3" size={20} className="text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground font-headline">
            ${averageSpent}
          </div>
          <p className="text-sm text-muted-foreground mt-1">Per appointment</p>
        </div>

        <div className="glass-panel p-6 rounded-xl morph-hover">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-muted-foreground">Payment Methods</h3>
            <Icon name="Wallet" size={20} className="text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground font-headline">
            {paymentMethods?.length}
          </div>
          <p className="text-sm text-muted-foreground mt-1">Active cards</p>
        </div>
      </div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Select
          label="Time Period"
          options={periodOptions}
          value={selectedPeriod}
          onChange={setSelectedPeriod}
          className="sm:w-48"
        />
        <Select
          label="Status"
          options={statusOptions}
          value={selectedStatus}
          onChange={setSelectedStatus}
          className="sm:w-48"
        />
      </div>
      {/* Payment Methods */}
      <div className="mb-8">
        <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
          Payment Methods
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods?.map((method) => (
            <div key={method?.id} className="glass-panel p-4 rounded-xl morph-hover">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="CreditCard" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      •••• •••• •••• {method?.lastFour}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {method?.brand} • Expires {method?.expiryMonth}/{method?.expiryYear}
                    </div>
                  </div>
                </div>
                
                {method?.isDefault && (
                  <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    Default
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Invoice History */}
      <div>
        <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
          Invoice History
        </h3>
        
        {filteredInvoices?.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Receipt" size={32} className="text-muted-foreground" />
            </div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
              No Invoices Found
            </h3>
            <p className="text-muted-foreground">
              No invoices match your current filters.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredInvoices?.map((invoice) => (
              <div key={invoice?.id} className="glass-panel p-6 rounded-xl morph-hover">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Receipt" size={24} className="text-primary" />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-headline text-lg font-semibold text-foreground">
                          Invoice #{invoice?.number}
                        </h4>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(invoice?.status)}`}>
                          <Icon name={getStatusIcon(invoice?.status)} size={12} />
                          {invoice?.status?.charAt(0)?.toUpperCase() + invoice?.status?.slice(1)}
                        </div>
                      </div>
                      
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>Date: {formatDate(invoice?.date)}</span>
                          <span>Due: {formatDate(invoice?.dueDate)}</span>
                        </div>
                        <div>Services: {invoice?.services?.join(', ')}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground font-headline">
                        ${invoice?.amount}
                      </div>
                      {invoice?.tax > 0 && (
                        <div className="text-sm text-muted-foreground">
                          +${invoice?.tax} tax
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Eye"
                        iconPosition="left"
                        onClick={() => onViewDetails(invoice?.id)}
                      >
                        View
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Download"
                        iconPosition="left"
                        onClick={() => onDownloadReceipt(invoice?.id)}
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingHistory;