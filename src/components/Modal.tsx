import React, { useState } from 'react';
import { X, Heart, HeartHandshake, Handshake, Share2, CheckCircle2, DollarSign, Calendar, MapPin, Users, Award, ShieldCheck, Sparkles, Copy, Check, Eye, MessageSquare, AlignLeft } from 'lucide-react';
import { ModalType, Project, ImpactStory, BlogArticle } from '../types';
import { IconRenderer } from './IconRenderer';

const renderFormattedText = (text: string) => {
  const parseInline = (line: string) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-gray-950 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return text.split('\n\n').map((block, idx) => {
    if (block.startsWith('### ')) {
      return (
        <h3
          key={idx}
          className="font-heading font-bold text-xl sm:text-2xl text-[#2E7D32] dark:text-[#C8E6C9] mt-8 mb-4 border-b border-gray-200 dark:border-green-800/40 pb-2.5"
        >
          {parseInline(block.replace('### ', ''))}
        </h3>
      );
    }
    if (block.startsWith('#### ')) {
      return (
        <h4
          key={idx}
          className="font-heading font-bold text-lg sm:text-xl text-gray-900 dark:text-white mt-6 mb-3"
        >
          {parseInline(block.replace('#### ', ''))}
        </h4>
      );
    }

    const lines = block.split('\n');
    const isList = lines.some(
      (l) =>
        l.trim().startsWith('•') ||
        l.trim().startsWith('✅') ||
        l.trim().match(/^\d+\./) ||
        l.trim().startsWith('#### ') ||
        l.trim().startsWith('### ')
    );

    if (isList || lines.length > 1) {
      return (
        <div key={idx} className="space-y-3 my-4">
          {lines.map((line, lIdx) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith('•') || trimmed.startsWith('✅')) {
              const icon = trimmed.startsWith('✅') ? '✅' : '•';
              const content = trimmed.slice(icon.length).trim();
              return (
                <div
                  key={lIdx}
                  className="flex items-start gap-3 text-[#333333] dark:text-gray-300 font-sans text-sm sm:text-base leading-relaxed"
                >
                  <span
                    className={
                      icon === '•'
                        ? 'text-[#4CAF50] font-bold text-xl leading-none mt-0.5'
                        : 'mt-1 shrink-0'
                    }
                  >
                    {icon === '•' ? '•' : '✅'}
                  </span>
                  <div className="flex-1">{parseInline(content)}</div>
                </div>
              );
            }
            if (trimmed.startsWith('### ')) {
              return (
                <h3
                  key={lIdx}
                  className="font-heading font-bold text-xl sm:text-2xl text-[#2E7D32] dark:text-[#C8E6C9] mt-8 mb-4 border-b border-gray-200 dark:border-green-800/40 pb-2.5"
                >
                  {parseInline(trimmed.replace('### ', ''))}
                </h3>
              );
            }
            if (trimmed.startsWith('#### ')) {
              return (
                <h4
                  key={lIdx}
                  className="font-heading font-bold text-lg sm:text-xl text-gray-900 dark:text-white mt-6 mb-3"
                >
                  {parseInline(trimmed.replace('#### ', ''))}
                </h4>
              );
            }
            if (trimmed.match(/^\d+\.\s/)) {
              const match = trimmed.match(/^(\d+\.)\s(.*)/);
              if (match) {
                return (
                  <div
                    key={lIdx}
                    className="flex items-start gap-3 text-[#333333] dark:text-gray-300 font-sans text-sm sm:text-base leading-relaxed mt-2"
                  >
                    <span className="font-bold text-[#4CAF50] shrink-0 mt-0.5">{match[1]}</span>
                    <div className="flex-1">{parseInline(match[2])}</div>
                  </div>
                );
              }
            }
            return (
              <p
                key={lIdx}
                className="text-[#333333] dark:text-gray-300 font-sans text-sm sm:text-base leading-relaxed"
              >
                {parseInline(trimmed)}
              </p>
            );
          })}
        </div>
      );
    }

    return (
      <p
        key={idx}
        className="text-[#333333] dark:text-gray-300 font-sans text-sm sm:text-base leading-relaxed my-4"
      >
        {parseInline(block)}
      </p>
    );
  });
};

interface ModalProps {
  type: ModalType;
  project?: Project | null;
  story?: ImpactStory | null;
  article?: BlogArticle | null;
  onClose: () => void;
  onOpenDonate?: (project: Project) => void;
}

export const Modal: React.FC<ModalProps> = ({ type, project, story, article, onClose, onOpenDonate }) => {
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationFrequency, setDonationFrequency] = useState<'one-time' | 'monthly' | 'annually'>('one-time');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'General Volunteering',
    availability: 'Weekends & Evenings',
    orgName: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (type === 'none') return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const presetAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#152618] rounded-3xl border border-[#C8E6C9] dark:border-green-800/60 shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#F5F5F5] dark:bg-[#1e3822]/60 border-b border-[#C8E6C9] dark:border-green-800/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#4CAF50] text-white flex items-center justify-center shadow-sm">
              {type === 'donate' && <Heart className="w-5 h-5 fill-current" />}
              {type === 'volunteer' && <HeartHandshake className="w-5 h-5" />}
              {type === 'partner' && <Handshake className="w-5 h-5" />}
              {type === 'spread-word' && <Share2 className="w-5 h-5" />}
              {type === 'project-details' && <Award className="w-5 h-5" />}
              {type === 'story-details' && <Sparkles className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-[#2E7D32] dark:text-[#C8E6C9]">
                {type === 'donate' && 'Support InAmigos Mission'}
                {type === 'volunteer' && 'Join as a Volunteer'}
                {type === 'partner' && 'Corporate & NGO Partnership'}
                {type === 'spread-word' && 'Amplify Our Impact'}
                {type === 'project-details' && (project?.title || 'Project Details')}
                {type === 'story-details' && 'Field Impact Story'}
              </h3>
              <p className="text-xs text-[#757575] dark:text-gray-400">
                {type === 'donate' && '100% of donations directly fund community field equipment & aid.'}
                {type === 'volunteer' && 'Make a direct difference in rural classrooms & clinics.'}
                {type === 'partner' && 'Let’s collaborate for sustainable generational growth.'}
                {type === 'spread-word' && 'Share with your community and friends.'}
                {type === 'project-details' && `${project?.category} Initiative`}
                {type === 'story-details' && `Published on ${story?.date}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-green-800/50 text-[#757575] dark:text-gray-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#C8E6C9] dark:bg-[#2E7D32] text-[#2E7D32] dark:text-white flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#4CAF50] dark:text-[#C8E6C9]" />
              </div>
              <h4 className="font-heading font-bold text-2xl text-[#2E7D32] dark:text-white">
                Thank You for Your Support!
              </h4>
              <p className="text-sm text-[#757575] dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                We have received your submission and sent a confirmation email with audited project verification links to your inbox.
              </p>
            </div>
          ) : (
            <>
              {/* DONATE MODAL */}
              {type === 'donate' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {project && (
                    <div className="p-4 rounded-2xl bg-[#C8E6C9]/30 dark:bg-[#1e3822]/40 border border-[#C8E6C9] dark:border-green-800/60 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4CAF50] text-white flex items-center justify-center shrink-0">
                        <IconRenderer name={project.iconName} className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#4CAF50] block">Designated Project Fund</span>
                        <h5 className="font-heading font-bold text-sm text-[#2E7D32] dark:text-white truncate">{project.title}</h5>
                      </div>
                    </div>
                  )}

                  {/* Frequency Toggle */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#F5F5F5] dark:bg-[#0d1a0f] rounded-2xl border border-[#C8E6C9] dark:border-green-800/60">
                    <button
                      type="button"
                      onClick={() => setDonationFrequency('one-time')}
                      className={`py-2 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all ${
                        donationFrequency === 'one-time'
                          ? 'bg-[#4CAF50] text-white shadow-md'
                          : 'text-[#757575] dark:text-gray-300 hover:text-[#2E7D32]'
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationFrequency('monthly')}
                      className={`py-2 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1 ${
                        donationFrequency === 'monthly'
                          ? 'bg-[#4CAF50] text-white shadow-md'
                          : 'text-[#757575] dark:text-gray-300 hover:text-[#2E7D32]'
                      }`}
                    >
                      <span>Monthly</span>
                      <span className="px-1 py-0.5 rounded text-[9px] bg-amber-400 text-black font-bold hidden sm:inline">Rec</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationFrequency('annually')}
                      className={`py-2 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all ${
                        donationFrequency === 'annually'
                          ? 'bg-[#4CAF50] text-white shadow-md'
                          : 'text-[#757575] dark:text-gray-300 hover:text-[#2E7D32]'
                      }`}
                    >
                      Annually
                    </button>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#757575] dark:text-gray-400 mb-2.5">
                      Select Contribution Amount (USD)
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 mb-3">
                      {presetAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setDonationAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`py-3 rounded-2xl font-heading font-bold text-sm border transition-all duration-500 ease-in-out ${
                            donationAmount === amt && !customAmount
                              ? 'bg-[#2E7D32] text-white border-[#2E7D32] shadow-md scale-[1.02]'
                              : 'bg-white dark:bg-[#1a2e1e] text-[#2E7D32] dark:text-gray-200 border-[#C8E6C9] dark:border-green-800/60 hover:border-[#4CAF50]'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#757575]">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <input
                        type="number"
                        placeholder="Or enter custom amount..."
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          if (e.target.value) setDonationAmount(Number(e.target.value));
                        }}
                        className="w-full pl-9 pr-4 py-3 rounded-2xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-[#2E7D32] dark:text-white focus:outline-none focus:border-[#4CAF50] font-heading font-semibold"
                      />
                    </div>
                  </div>

                  {/* Impact Translation */}
                  <div className="p-4 rounded-2xl bg-[#C8E6C9]/40 dark:bg-[#1e3822]/60 border border-[#C8E6C9] dark:border-green-800/60 flex items-center gap-3 text-xs text-[#2E7D32] dark:text-[#C8E6C9]">
                    <ShieldCheck className="w-5 h-5 shrink-0 text-[#4CAF50]" />
                    <span>
                      <strong>Your ${donationAmount || 0} gift</strong> will provide{' '}
                      {donationAmount >= 250
                        ? 'a full solar filtration kit for an entire village community.'
                        : donationAmount >= 100
                        ? '10 rural students with digital tablets and learning software for a full academic year.'
                        : donationAmount >= 50
                        ? 'essential maternal medicine checkups and nutrition for 5 expectant mothers.'
                        : 'pure filtered drinking water for a family of 5 for six months.'}
                    </span>
                  </div>

                  {/* Donor Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="space-y-3 pt-2 border-t border-[#C8E6C9] dark:border-green-800/60">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#757575] dark:text-gray-400">
                      Payment Information
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`py-2.5 rounded-xl font-heading font-semibold text-xs border transition-all flex items-center justify-center gap-2 ${
                          paymentMethod === 'card'
                            ? 'bg-[#2E7D32] text-white border-[#2E7D32] shadow'
                            : 'bg-white dark:bg-[#1a2e1e] text-[#2E7D32] dark:text-gray-200 border-[#C8E6C9] dark:border-green-800/60'
                        }`}
                      >
                        <span>💳 Credit / Debit Card</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('paypal')}
                        className={`py-2.5 rounded-xl font-heading font-semibold text-xs border transition-all flex items-center justify-center gap-2 ${
                          paymentMethod === 'paypal'
                            ? 'bg-[#2E7D32] text-white border-[#2E7D32] shadow'
                            : 'bg-white dark:bg-[#1a2e1e] text-[#2E7D32] dark:text-gray-200 border-[#C8E6C9] dark:border-green-800/60'
                        }`}
                      >
                        <span>🅿️ PayPal Checkout</span>
                      </button>
                    </div>

                    {paymentMethod === 'card' ? (
                      <div className="space-y-2 p-3 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60">
                        <div>
                          <label className="block text-[11px] font-semibold text-[#757575] mb-1">Card Number *</label>
                          <input
                            type="text"
                            required
                            placeholder="4532 •••• •••• 8910"
                            className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#152618] border border-[#C8E6C9] dark:border-green-800/60 text-xs font-mono text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[11px] font-semibold text-[#757575] mb-1">Expiration (MM/YY) *</label>
                            <input
                              type="text"
                              required
                              placeholder="08 / 28"
                              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#152618] border border-[#C8E6C9] dark:border-green-800/60 text-xs font-mono text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-[#757575] mb-1">Security Code (CVC) *</label>
                            <input
                              type="password"
                              required
                              maxLength={4}
                              placeholder="•••"
                              className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#152618] border border-[#C8E6C9] dark:border-green-800/60 text-xs font-mono text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-center text-xs text-[#757575] dark:text-gray-300">
                        You will be securely redirected to PayPal to complete your {donationFrequency} donation upon clicking submit.
                      </div>
                    )}
                  </div>

                  {/* Privacy Policy Link Notice */}
                  <div className="text-[11px] text-[#757575] dark:text-gray-400 text-center leading-relaxed">
                    🔒 100% Secure Encryption. By submitting, you agree to our{' '}
                    <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("InAmigos NGO Privacy Policy: We strictly protect donor privacy. 100% of your financial transaction is encrypted via 256-bit SSL, and we never sell or trade donor personal information."); }} className="text-[#2E7D32] dark:text-[#4CAF50] underline font-semibold">
                      Privacy Policy
                    </a>{' '}
                    and terms of service.
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] hover:from-[#45a049] hover:to-[#256327] text-white font-heading font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-95 transition-all duration-700 ease-in-out flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5 fill-current shrink-0" />
                    <span>Complete Tax-Deductible Donation (${donationAmount || 0})</span>
                  </button>
                </form>
              )}

              {/* VOLUNTEER MODAL */}
              {type === 'volunteer' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Area of Interest *</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                      >
                        <option value="General Volunteering">General Volunteering</option>
                        <option value="Event Support & Outreach">Event Support & Outreach</option>
                        <option value="Fundraising & Grant Writing">Fundraising & Grant Writing</option>
                        <option value="Administrative & Operations">Administrative & Operations</option>
                        <option value="Teaching & EdTech Bootcamps">Teaching & EdTech Bootcamps</option>
                        <option value="Medical & Mobile Health Camps">Medical & Mobile Health Camps</option>
                        <option value="Water Engineering & Solar">Water Engineering & Solar</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Your Availability *</label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                    >
                      <option value="Weekends & Evenings">Weekends & Evenings (~5 hrs/week)</option>
                      <option value="Weekdays (Part-Time)">Weekdays Part-Time (10-15 hrs/week)</option>
                      <option value="Full-Time Remote / Field">Full-Time Remote / Field Support</option>
                      <option value="Summer / Semester Internship">Summer / Semester Internship</option>
                      <option value="Flexible / On-Call">Flexible / On-Call for Events</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Why Do You Want To Volunteer With InAmigos? *</label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Share what excites you about our mission and any relevant skills you bring..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-2xl bg-[#4CAF50] hover:bg-[#45a049] text-white font-heading font-bold text-base shadow-lg transition-all duration-700 ease-in-out hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <HeartHandshake className="w-5 h-5 shrink-0" />
                    <span>Submit Volunteer Application</span>
                  </button>
                </form>
              )}

              {/* PARTNER MODAL */}
              {type === 'partner' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Organization / Company Name *</label>
                      <input
                        type="text"
                        name="orgName"
                        required
                        placeholder="Acme Corp / Foundation"
                        value={formData.orgName}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Contact Person *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name & title"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Official Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="contact@organization.org"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-1">Partnership Scope / Proposal</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Describe your CSR grant, employee volunteering inquiry, or academic research proposal..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#4CAF50]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#2E7D32] hover:bg-[#4CAF50] text-white font-heading font-bold text-base shadow-lg transition-all duration-700 ease-in-out hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Handshake className="w-5 h-5" />
                    <span>Send Partnership Inquiry</span>
                  </button>
                </form>
              )}

              {/* SPREAD THE WORD MODAL */}
              {type === 'spread-word' && (
                <div className="space-y-6 text-center">
                  <div className="p-6 rounded-2xl bg-[#C8E6C9]/30 dark:bg-[#1e3822]/40 border border-[#C8E6C9] dark:border-green-800/60 space-y-2">
                    <h4 className="font-heading font-bold text-lg text-[#2E7D32] dark:text-white">
                      Amplify Our Voice on Social Media
                    </h4>
                    <p className="text-xs text-[#757575] dark:text-gray-300 max-w-md mx-auto">
                      Use the tag <strong className="text-[#4CAF50]">#InAmigosImpact</strong> when sharing our field projects to help us connect with passionate change-makers!
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    {['Twitter / X', 'LinkedIn', 'Facebook', 'WhatsApp', 'Email'].map((platform) => (
                      <button
                        key={platform}
                        onClick={() => alert(`Sharing InAmigos mission via ${platform}...`)}
                        className="px-4 py-3 rounded-2xl bg-[#F5F5F5] dark:bg-[#0d1a0f] hover:bg-[#4CAF50] hover:text-white text-[#2E7D32] dark:text-gray-200 border border-[#C8E6C9] dark:border-green-800/60 font-heading font-semibold text-xs shadow-sm transition-all"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#C8E6C9] dark:border-green-800/60">
                    <label className="block text-xs font-semibold text-[#757575] dark:text-gray-400 mb-2">Or Copy Official Campaign Link</label>
                    <div className="flex items-center gap-2 max-w-md mx-auto">
                      <input
                        type="text"
                        readOnly
                        value={window.location.href}
                        className="flex-1 px-3.5 py-2 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 text-xs text-gray-700 dark:text-gray-300 font-mono"
                      />
                      <button
                        onClick={handleCopyLink}
                        className="px-4 py-2 rounded-xl bg-[#2E7D32] hover:bg-[#4CAF50] text-white font-heading font-semibold text-xs flex items-center gap-1.5 shadow"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* PROJECT DETAILS MODAL */}
              {type === 'project-details' && project && (
                <div className="space-y-6">
                  <div className="relative h-60 rounded-2xl overflow-hidden shadow-md">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="px-3 py-1 rounded-full bg-[#4CAF50] text-white font-heading font-semibold text-xs mb-1 inline-block">
                          {project.category}
                        </span>
                        <h4 className="font-heading font-bold text-xl text-white">{project.title}</h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white text-[#2E7D32] flex items-center justify-center shrink-0">
                        <IconRenderer name={project.iconName} className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60">
                      <span className="text-[10px] uppercase text-[#757575] font-bold block">Location</span>
                      <span className="text-xs font-semibold text-[#2E7D32] dark:text-white flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#4CAF50]" />
                        {project.location}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60">
                      <span className="text-[10px] uppercase text-[#757575] font-bold block">Impact Achieved</span>
                      <span className="text-xs font-semibold text-[#2E7D32] dark:text-white flex items-center gap-1 mt-0.5">
                        <Users className="w-3.5 h-3.5 text-[#4CAF50]" />
                        {project.impactMetric}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-heading font-bold text-sm text-[#2E7D32] dark:text-white mb-2">About This Initiative</h5>
                    <p className="text-sm text-[#333333] dark:text-gray-300 leading-relaxed font-sans">{project.fullDescription}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#C8E6C9]/30 dark:bg-[#1e3822]/40 border border-[#C8E6C9] dark:border-green-800/60">
                    <h5 className="font-heading font-bold text-xs uppercase text-[#2E7D32] dark:text-[#C8E6C9] mb-2.5">
                      Audited Field Milestones Achieved:
                    </h5>
                    <ul className="space-y-1.5">
                      {project.milestones.map((m, idx) => (
                        <li key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => {
                        if (onOpenDonate && project) {
                          onOpenDonate(project);
                        } else {
                          onClose();
                        }
                      }}
                      className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] hover:from-[#256329] hover:to-[#439c47] text-white font-heading font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-700 ease-in-out text-center tracking-wide block"
                    >
                      Donate Directly — {project.title.split(':')[0]}
                    </button>
                  </div>
                </div>
              )}

              {/* STORY DETAILS MODAL */}
              {type === 'story-details' && story && (
                <div className="space-y-6">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                    <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-[#4CAF50] text-white font-heading font-semibold text-xs mb-2 inline-block">
                        {story.category}
                      </span>
                      <h4 className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight">{story.title}</h4>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#757575] dark:text-gray-400 border-b border-[#C8E6C9] dark:border-green-800/60 pb-3">
                    <span className="font-semibold text-[#2E7D32] dark:text-[#C8E6C9]">By {story.author}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#4CAF50]" />
                        {story.date}
                      </span>
                      <span>{story.readTime}</span>
                    </div>
                  </div>

                  <div className="prose dark:prose-invert max-w-none text-sm text-[#333333] dark:text-gray-300 leading-relaxed font-sans whitespace-pre-line">
                    {story.fullContent}
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#757575]">Was this report helpful?</span>
                      <span className="px-2.5 py-1 rounded-full bg-[#C8E6C9]/60 dark:bg-green-900/60 text-[#2E7D32] dark:text-white text-xs font-bold">
                        ❤️ {story.likes} supporters liked this
                      </span>
                    </div>
                    <button
                      onClick={() => alert("Thank you for sharing this verified dispatch!")}
                      className="px-4 py-2 rounded-xl bg-[#2E7D32] text-white font-heading font-semibold text-xs hover:bg-[#4CAF50] transition-colors"
                    >
                      Share Story
                    </button>
                  </div>
                </div>
              )}

              {/* BLOG DETAILS MODAL */}
              {type === 'blog-details' && article && (
                <div className="space-y-6">
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-[#4CAF50] text-white font-heading font-semibold text-xs mb-2 inline-block">
                        {article.category}
                      </span>
                      <h4 className="font-heading font-bold text-xl sm:text-3xl text-white leading-tight">{article.title}</h4>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#757575] dark:text-gray-400 border-b border-[#C8E6C9] dark:border-green-800/60 pb-3">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 font-medium text-[#2E7D32] dark:text-[#C8E6C9]">
                        <Calendar className="w-4 h-4 text-[#4CAF50]" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <Eye className="w-4 h-4 text-[#4CAF50]" />
                        {article.viewsCount} views
                      </span>
                    </div>
                    <span className="font-semibold px-3 py-1 rounded-full bg-[#C8E6C9]/40 dark:bg-green-900/40 text-[#2E7D32] dark:text-[#C8E6C9]">
                      {article.readTime}
                    </span>
                  </div>

                  <div className="text-sm sm:text-base text-[#333333] dark:text-gray-300 leading-relaxed font-sans">
                    {renderFormattedText(article.fullContent)}
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F5F5] dark:bg-[#0d1a0f] border border-[#C8E6C9] dark:border-green-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#757575] dark:text-gray-400 font-medium">InAmigos Foundation Official Blogs</span>
                    </div>
                    <button
                      onClick={() => alert("Thank you for sharing this article from InAmigos Foundation!")}
                      className="px-4 py-2 rounded-xl bg-[#2E7D32] text-white font-heading font-semibold text-xs hover:bg-[#4CAF50] transition-colors flex items-center gap-1.5"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      Share Article
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
