
'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, dispatch, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="flex items-center justify-center md:h-screen min-h-[600px] pt-20">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-zinc-900 p-3 md:h-36 border border-white/10">
          <div className="w-32 text-white md:w-36">
            <h1 className="text-2xl font-bold">Brainware Admin</h1>
          </div>
        </div>
        
        <form action={dispatch} className="space-y-3">
          <div className="flex-1 rounded-lg bg-zinc-900 px-6 pb-4 pt-8 border border-white/10">
            <h1 className="mb-3 text-2xl font-bold text-white">
              Please log in.
            </h1>
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-white/10 bg-zinc-800 py-[9px] pl-3 text-sm outline-2 placeholder:text-zinc-500 text-white"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-white/10 bg-zinc-800 py-[9px] pl-3 text-sm outline-2 placeholder:text-zinc-500 text-white"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                </div>
              </div>
            </div>
            <Button className="mt-4 w-full" aria-disabled={isPending}>
              Log in
            </Button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
