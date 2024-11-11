'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(data)
    // WIP login logic
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-clash-display">Correo electrónico</FormLabel>
              <FormControl>
                <Input className="font-clash-display" placeholder="correo@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-clash-display">Contraseña</FormLabel>
              <FormControl>
                <Input className="font-clash-display" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-cedi-black hover:bg-cedi-light-gray font-clash-display text-white">
          Iniciar sesión
        </Button>
        <div className="text-center text-sm">
          <Link href="/forgot-password" className="text-cedi-black font-clash-display hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="text-center text-sm font-clash-display">
          ¿No tienes una cuenta?{' '}
          <Link href="/sign-up" className="text-black font-clash-display hover:underline">
            Regístrate
          </Link>
        </div>
      </form>
    </Form>
  )
}