import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Loader2, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export const MagicSignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch('/api/v1/auth/otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.status === 'success') {
        toast.success('Magic link / OTP sent!');
        setStep('otp');
        setCooldown(60);
      } else {
        toast.error(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      toast.error('Connection error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length < 6) return;

    setLoading(true);
    try {
      const res = await fetch('/api/v1/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token: otp }),
      });
      const data = await res.json();

      if (data.status === 'success') {
        toast.success('Welcome to Vilogit!');
        window.location.href = '/dashboard';
      } else {
        toast.error(data.message || 'Invalid code');
      }
    } catch (err) {
      toast.error('Verification failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Card className="w-full max-w-md border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
        {/* Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />

        <CardHeader className="space-y-1 relative">
          <CardTitle className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            {step === 'email' ? <Mail className="w-5 h-5 text-purple-400" /> : <ShieldCheck className="w-5 h-5 text-blue-400" />}
            {step === 'email' ? 'Sign in to Origin' : 'Verify Identity'}
          </CardTitle>
          <CardDescription className="text-zinc-400">
            {step === 'email' 
              ? 'Enter your email to receive a passwordless sign-in link.' 
              : `We've sent a 6-digit code to ${email}`}
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4 relative">
          <form onSubmit={step === 'email' ? handleRequestOtp : handleVerifyOtp} className="space-y-4">
            {step === 'email' ? (
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:ring-purple-500/50 h-12"
                  required
                  disabled={loading}
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="000000"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="bg-white/5 border-white/10 text-white text-center text-2xl tracking-[0.5em] font-mono focus:ring-blue-500/50 h-14"
                  required
                  disabled={loading}
                  autoFocus
                />
                <div className="flex justify-between items-center text-xs px-1">
                   <span className="text-zinc-500">
                     {cooldown > 0 ? `Resend in ${cooldown}s` : 'Ready for resend'}
                   </span>
                   <button 
                    type="button"
                    onClick={() => setStep('email')}
                    className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-4"
                   >
                     Change email
                   </button>
                </div>
              </div>
            )}

            <Button 
              type="submit" 
              disabled={loading || (step === 'otp' && otp.length < 6)}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <span className="flex items-center gap-2">
                  {step === 'email' ? 'Send Magic Link' : 'Verify Origin Access'}
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
