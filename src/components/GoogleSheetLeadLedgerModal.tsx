import React, { useState, useEffect } from 'react';
import { X, Table, Download, Copy, Check, MessageSquare, ExternalLink, Settings, RefreshCw, Calendar, Clock, Phone, User, Stethoscope } from 'lucide-react';
import { getLeads, updateLeadStatus, exportLeadsToCSV, copyLeadsTSVForGoogleSheets, getGoogleSheetWebhookUrl, setGoogleSheetWebhookUrl, generateWhatsAppRouteUrl, ClinicLead } from '../utils/leadStorage';
import { CLINIC_INFO } from '../data/clinicData';

interface GoogleSheetLeadLedgerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSheetLeadLedgerModal: React.FC<GoogleSheetLeadLedgerModalProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<ClinicLead[]>([]);
  const [copied, setCopied] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [showWebhookSettings, setShowWebhookSettings] = useState(false);
  const [webhookSaved, setWebhookSaved] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) {
      setLeads(getLeads());
      setWebhookUrl(getGoogleSheetWebhookUrl());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    const success = await copyLeadsTSVForGoogleSheets();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    setGoogleSheetWebhookUrl(webhookUrl);
    setWebhookSaved(true);
    setTimeout(() => setWebhookSaved(false), 2500);
  };

  const handleStatusChange = (id: string, newStatus: ClinicLead['status']) => {
    updateLeadStatus(id, newStatus);
    setLeads(getLeads());
  };

  const filteredLeads = leads.filter(l => 
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.phone.includes(searchTerm) ||
    l.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.concern.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF4EE] rounded-3xl border border-[#E8DACB] max-w-5xl w-full p-5 sm:p-8 shadow-2xl z-10 max-h-[94vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E8DACB]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#916645] mb-1">
              <Table className="w-4 h-4 text-[#C89F56]" />
              <span>Clinic Records & Google Sheets Sync Hub</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18191B]">
              Appointment Leads & Submission Ledger
            </h2>
            <p className="text-xs text-[#575654] mt-1">
              All website consultations are logged here with precise date & time, ready for Google Sheets export and dual WhatsApp routing.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white text-[#18191B] hover:bg-[#FAF4EE] border border-[#E8DACB] transition-colors"
            aria-label="Close ledger"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#E8DACB]/60">
          
          {/* Search box */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, phone, doctor..."
              className="w-full px-3 py-2 text-xs bg-white border border-[#E8DACB] rounded-xl focus:outline-none focus:border-[#C89F56]"
            />
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Download CSV */}
            <button
              onClick={exportLeadsToCSV}
              className="inline-flex items-center gap-1.5 bg-[#18191B] text-[#FAF4EE] hover:bg-[#2C2D30] px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#C89F56]" />
              <span>Download CSV (Google Sheets)</span>
            </button>

            {/* Copy TSV for 1-Click Paste */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 bg-white text-[#18191B] hover:bg-[#FAF4EE] border border-[#E8DACB] px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
                  <span className="text-[#2E7D32]">Copied for Google Sheets!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#916645]" />
                  <span>Copy Rows for Sheet Paste</span>
                </>
              )}
            </button>

            {/* Toggle Webhook Settings */}
            <button
              onClick={() => setShowWebhookSettings(!showWebhookSettings)}
              className="inline-flex items-center gap-1.5 bg-[#FAF4EE] hover:bg-[#F3E9DF] text-[#7A5B40] border border-[#E8DACB] px-3 py-2 rounded-xl text-xs font-medium transition-colors"
            >
              <Settings className="w-3.5 h-3.5 text-[#C89F56]" />
              <span>Live Sheet Webhook</span>
            </button>
          </div>
        </div>

        {/* Webhook Configuration Panel (Collapsible) */}
        {showWebhookSettings && (
          <div className="my-3 p-4 bg-white rounded-2xl border border-[#C89F56]/40 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#18191B]">
                🔗 Real-time Google Sheet Webhook Sync (Google Apps Script / Zapier / Make)
              </span>
              <button
                onClick={() => setShowWebhookSettings(false)}
                className="text-[#8C8985] hover:text-[#18191B]"
              >
                ✕
              </button>
            </div>
            <p className="text-[#575654] leading-relaxed">
              Want submissions to automatically append to a live Google Sheet in real-time? Paste your Google Apps Script Web App URL below:
            </p>
            <form onSubmit={handleSaveWebhook} className="flex gap-2">
              <input
                type="url"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://script.google.com/macros/s/AKfycbx.../exec"
                className="flex-1 px-3 py-2 bg-[#FAF4EE] border border-[#E8DACB] rounded-xl focus:outline-none focus:border-[#C89F56] text-xs font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#18191B] text-[#FAF4EE] rounded-xl font-medium hover:bg-[#2C2D30]"
              >
                {webhookSaved ? 'Saved!' : 'Save Webhook URL'}
              </button>
            </form>
            <details className="text-[11px] text-[#7A5B40] pt-1">
              <summary className="cursor-pointer hover:underline">
                View 1-Minute Google Apps Script Code (Click to Expand)
              </summary>
              <pre className="mt-2 p-3 bg-[#18191B] text-[#FAF4EE] rounded-lg overflow-x-auto font-mono text-[10px]">
{`function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp,
    data.referenceId,
    data.patientName,
    data.patientPhone,
    data.preferredDoctor,
    data.concern,
    data.consultationType,
    data.appointmentDate,
    data.timeWindow,
    data.clinicalNotes
  ]);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}`}
              </pre>
            </details>
          </div>
        )}

        {/* Leads Table Container */}
        <div className="flex-1 overflow-auto my-3 border border-[#E8DACB] rounded-2xl bg-white">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-[#FAF4EE] text-[#18191B] font-semibold sticky top-0 z-10 border-b border-[#E8DACB]">
              <tr>
                <th className="py-3 px-3">Date & Time</th>
                <th className="py-3 px-3">Ref ID</th>
                <th className="py-3 px-3">Patient Details</th>
                <th className="py-3 px-3">Requested Doctor</th>
                <th className="py-3 px-3">Concern & Slot</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Route to WhatsApp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DACB]/60 text-[#4E4C48]">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-[#8C8985]">
                    No appointment submissions found matching "{searchTerm}".
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#FAF4EE]/50 transition-colors">
                    
                    {/* Timestamp */}
                    <td className="py-3 px-3 whitespace-nowrap">
                      <div className="font-semibold text-[#18191B] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C89F56]" />
                        <span>{lead.submissionDate}</span>
                      </div>
                      <div className="text-[11px] text-[#6E6C68] flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3 h-3 text-[#8C8985]" />
                        <span>{lead.submissionTime}</span>
                      </div>
                    </td>

                    {/* Ref ID */}
                    <td className="py-3 px-3 whitespace-nowrap font-mono text-[11px] text-[#7A5B40] font-semibold">
                      {lead.id}
                    </td>

                    {/* Patient Name & Phone */}
                    <td className="py-3 px-3">
                      <div className="font-semibold text-[#18191B]">{lead.name}</div>
                      <a href={`tel:${lead.phone}`} className="text-[11px] text-[#575654] hover:text-[#18191B] flex items-center gap-1 mt-0.5">
                        <Phone className="w-3 h-3 text-[#C89F56]" />
                        <span>{lead.phone}</span>
                      </a>
                    </td>

                    {/* Doctor */}
                    <td className="py-3 px-3 whitespace-nowrap">
                      <span className="font-medium text-[#18191B] bg-[#FAF4EE] px-2 py-0.5 rounded border border-[#E8DACB]">
                        {lead.doctor}
                      </span>
                    </td>

                    {/* Concern & Slot */}
                    <td className="py-3 px-3">
                      <div className="font-medium text-[#18191B]">{lead.concern}</div>
                      <div className="text-[11px] text-[#6E6C68] mt-0.5">
                        {lead.preferredDate} ({lead.preferredTime})
                      </div>
                      {lead.notes && (
                        <div className="text-[10px] text-[#8C8985] italic mt-0.5 truncate max-w-xs">
                          Notes: {lead.notes}
                        </div>
                      )}
                    </td>

                    {/* Status dropdown */}
                    <td className="py-3 px-3 whitespace-nowrap">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as ClinicLead['status'])}
                        className={`text-[11px] font-semibold px-2 py-1 rounded-lg border focus:outline-none ${
                          lead.status === 'Confirmed'
                            ? 'bg-[#E8F5E9] text-[#2E7D32] border-[#C8E6C9]'
                            : lead.status === 'Contacted'
                            ? 'bg-[#E3F2FD] text-[#1565C0] border-[#BBDEFB]'
                            : 'bg-[#FFF8E1] text-[#F57F17] border-[#FFE082]'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Confirmed">Confirmed</option>
                      </select>
                    </td>

                    {/* WhatsApp Action Buttons */}
                    <td className="py-3 px-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        {/* Line 1 */}
                        <a
                          href={generateWhatsAppRouteUrl(lead, CLINIC_INFO.primaryPhone)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#20BA5A] text-white px-2.5 py-1 rounded-lg text-[10px] font-semibold shadow-xs"
                          title="Send to Clinic Line 1 (+91-9646566641)"
                        >
                          <MessageSquare className="w-3 h-3 fill-white text-white" />
                          <span>Line 1</span>
                        </a>

                        {/* Line 2 */}
                        <a
                          href={generateWhatsAppRouteUrl(lead, CLINIC_INFO.secondaryPhone)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-[#18191B] hover:bg-[#2C2D30] text-[#FAF4EE] px-2.5 py-1 rounded-lg text-[10px] font-semibold border border-[#444]"
                          title="Send to Clinic Line 2 (+91-9646566642)"
                        >
                          <MessageSquare className="w-3 h-3 text-[#25D366]" />
                          <span>Line 2</span>
                        </a>
                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <div className="pt-3 border-t border-[#E8DACB] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E6C68] gap-2">
          <div>
            Showing <strong className="text-[#18191B]">{filteredLeads.length}</strong> recorded consultation request(s).
          </div>
          <div className="flex items-center gap-3">
            <span>Clinic Primary: <strong>{CLINIC_INFO.primaryPhoneDisplay}</strong></span>
            <span>·</span>
            <span>Secondary: <strong>{CLINIC_INFO.secondaryPhoneDisplay}</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
};
