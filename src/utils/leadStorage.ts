export interface ClinicLead {
  id: string;
  submissionDate: string;
  submissionTime: string;
  submissionTimestamp: string;
  name: string;
  phone: string;
  concern: string;
  doctor: string;
  type: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'New' | 'Contacted' | 'Confirmed';
  routedToNumbers: string[];
}

const STORAGE_KEY = 'solene_clinic_appointment_leads';
const WEBHOOK_KEY = 'solene_google_sheet_webhook_url';

// Default initial records for instant demonstration in clinic lead dashboard
const INITIAL_LEADS: ClinicLead[] = [
  {
    id: 'SOL-841920',
    submissionDate: '23 Sep 2026',
    submissionTime: '11:45 AM',
    submissionTimestamp: '2026-09-23T11:45:00.000Z',
    name: 'Sneha Kapoor',
    phone: '+91 98971 23456',
    concern: 'Laser Toning for Face',
    doctor: 'Dr. Asha Rawat',
    type: 'In-Clinic (Race Course, Dehradun)',
    preferredDate: '2026-09-26',
    preferredTime: '11:00 AM - 01:00 PM',
    notes: 'Consultation with Senior Doctor Dr. Asha Rawat regarding persistent melasma.',
    status: 'Confirmed',
    routedToNumbers: ['+919646566641', '+919646566642'],
  },
  {
    id: 'SOL-529184',
    submissionDate: '23 Sep 2026',
    submissionTime: '02:15 PM',
    submissionTimestamp: '2026-09-23T14:15:00.000Z',
    name: 'Vikramaditya Joshi',
    phone: '+91 97600 88219',
    concern: 'Advanced Hair/Face PRP',
    doctor: 'Dr. Asha Rawat',
    type: 'In-Clinic (Race Course, Dehradun)',
    preferredDate: '2026-09-27',
    preferredTime: '03:00 PM - 05:00 PM',
    notes: 'Traveling from Rishikesh. Seeking scalp assessment from Dr. Asha Rawat.',
    status: 'Contacted',
    routedToNumbers: ['+919646566641'],
  },
  {
    id: 'SOL-618492',
    submissionDate: '22 Sep 2026',
    submissionTime: '04:30 PM',
    submissionTimestamp: '2026-09-22T16:30:00.000Z',
    name: 'Ananya Sharma',
    phone: '+91 94120 44556',
    concern: 'Hydra Facial & Glow Protocol',
    doctor: 'Dr. Megha Sahi',
    type: 'In-Clinic (Race Course, Dehradun)',
    preferredDate: '2026-09-25',
    preferredTime: '01:00 PM - 03:00 PM',
    notes: 'Pre-wedding skin rejuvenation consultation.',
    status: 'New',
    routedToNumbers: ['+919646566641', '+919646566642'],
  }
];

export const getLeads = (): ClinicLead[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read leads from storage', e);
    return INITIAL_LEADS;
  }
};

export const saveLead = (leadInput: {
  name: string;
  phone: string;
  concern: string;
  doctor: string;
  type: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}): ClinicLead => {
  const now = new Date();
  
  // Format Date and Time
  const dateFormatted = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }); // e.g. "23 Sep 2026"

  const timeFormatted = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }); // e.g. "07:35 PM"

  const newLead: ClinicLead = {
    id: `SOL-${Math.floor(100000 + Math.random() * 900000)}`,
    submissionDate: dateFormatted,
    submissionTime: timeFormatted,
    submissionTimestamp: now.toISOString(),
    name: leadInput.name,
    phone: leadInput.phone,
    concern: leadInput.concern,
    doctor: leadInput.doctor,
    type: leadInput.type,
    preferredDate: leadInput.preferredDate,
    preferredTime: leadInput.preferredTime,
    notes: leadInput.notes || '',
    status: 'New',
    routedToNumbers: ['+919646566641', '+919646566642'],
  };

  try {
    const existing = getLeads();
    const updated = [newLead, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save lead', e);
  }

  // Attempt async sync to Google Sheets webhook if configured
  dispatchToGoogleSheetWebhook(newLead).catch((err) => {
    console.warn('Webhook dispatch caught error (standard if no webhook set):', err);
  });

  return newLead;
};

export const updateLeadStatus = (id: string, status: ClinicLead['status']): void => {
  try {
    const leads = getLeads();
    const updated = leads.map(l => l.id === id ? { ...l, status } : l);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update lead status', e);
  }
};

export const getGoogleSheetWebhookUrl = (): string => {
  return localStorage.getItem(WEBHOOK_KEY) || '';
};

export const setGoogleSheetWebhookUrl = (url: string): void => {
  localStorage.setItem(WEBHOOK_KEY, url.trim());
};

export const dispatchToGoogleSheetWebhook = async (lead: ClinicLead): Promise<boolean> => {
  const webhookUrl = getGoogleSheetWebhookUrl();
  if (!webhookUrl) return false;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: `${lead.submissionDate} ${lead.submissionTime}`,
        isoTimestamp: lead.submissionTimestamp,
        referenceId: lead.id,
        patientName: lead.name,
        patientPhone: lead.phone,
        preferredDoctor: lead.doctor,
        concern: lead.concern,
        consultationType: lead.type,
        appointmentDate: lead.preferredDate,
        timeWindow: lead.preferredTime,
        clinicalNotes: lead.notes || 'None',
        status: lead.status,
      }),
    });
    return true;
  } catch (e) {
    console.error('Error dispatching to Google Sheets Webhook:', e);
    return false;
  }
};

// Generates WhatsApp message URL for either Line 1 (+91-9646566641) or Line 2 (+91-9646566642)
export const generateWhatsAppRouteUrl = (
  lead: ClinicLead,
  targetPhoneNumber: string = '+919646566641'
): string => {
  const cleanNumber = targetPhoneNumber.replace(/[^0-9]/g, '');
  const messageText = 
    `*🔔 NEW APPOINTMENT BOOKING: ${lead.id}*\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `📅 *Submission Date & Time:* ${lead.submissionDate} at ${lead.submissionTime}\n` +
    `👤 *Patient Name:* ${lead.name}\n` +
    `📞 *Phone Number:* ${lead.phone}\n` +
    `🩺 *Doctor Requested:* ${lead.doctor}\n` +
    `✨ *Concern / Treatment:* ${lead.concern}\n` +
    `📍 *Mode:* ${lead.type}\n` +
    `🗓 *Preferred Date:* ${lead.preferredDate}\n` +
    `⏰ *Preferred Slot:* ${lead.preferredTime}\n` +
    (lead.notes ? `📝 *Notes:* ${lead.notes}\n` : '') +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `*Status:* Collected & Recorded in Solène Clinic Google Sheet Ledger\n` +
    `*Clinic Lines:* +91-9646566641 / +91-9646566642`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;
};

// Export to CSV for Google Sheets
export const exportLeadsToCSV = (): void => {
  const leads = getLeads();
  const headers = [
    'Submission Date',
    'Submission Time',
    'Reference ID',
    'Patient Name',
    'Phone Number',
    'Assigned Doctor',
    'Concern / Service',
    'Consultation Mode',
    'Preferred Date',
    'Preferred Time Window',
    'Status',
    'Notes'
  ];

  const escapeField = (val: string) => `"${(val || '').replace(/"/g, '""')}"`;

  const rows = leads.map(l => [
    escapeField(l.submissionDate),
    escapeField(l.submissionTime),
    escapeField(l.id),
    escapeField(l.name),
    escapeField(l.phone),
    escapeField(l.doctor),
    escapeField(l.concern),
    escapeField(l.type),
    escapeField(l.preferredDate),
    escapeField(l.preferredTime),
    escapeField(l.status),
    escapeField(l.notes || '')
  ].join(','));

  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `solene_clinic_appointments_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Copy TSV string so user can just paste directly into any open Google Sheet
export const copyLeadsTSVForGoogleSheets = async (): Promise<boolean> => {
  const leads = getLeads();
  const headers = [
    'Submission Date',
    'Submission Time',
    'Reference ID',
    'Patient Name',
    'Phone Number',
    'Assigned Doctor',
    'Concern / Service',
    'Consultation Mode',
    'Preferred Date',
    'Preferred Time Window',
    'Status',
    'Notes'
  ];

  const rows = leads.map(l => [
    l.submissionDate,
    l.submissionTime,
    l.id,
    l.name,
    l.phone,
    l.doctor,
    l.concern,
    l.type,
    l.preferredDate,
    l.preferredTime,
    l.status,
    l.notes || ''
  ].join('\t'));

  const tsv = [headers.join('\t'), ...rows].join('\n');

  try {
    await navigator.clipboard.writeText(tsv);
    return true;
  } catch (e) {
    console.error('Clipboard copy failed', e);
    return false;
  }
};
