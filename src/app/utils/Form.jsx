'use client'
import React, { useState, useCallback, useEffect } from 'react'
import Script from 'next/script'

export default function Form({ formId = 'SubmitQuery' ,via}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    agreed: false,
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const AgentInfo = {
    vAgentID: '4883',
    vProject: 'Trump Residence Gurgaon',
    vURL: 'https://www.tribecadevelopers.com/trumpresidenceslandingpage-gurgaon/',
    thankspageurl: 'https://www.tribecadevelopers.com/trumpresidenceslandingpage-gurgaon/thanks.htm',
  }

  const FormInfo = {
    SenderControlID: `qSenderName${formId === 'SubmitQuery' ? '' : formId}`,
    SenderControlMobileID: `qMobileNo${formId === 'SubmitQuery' ? '' : formId}`,
    SenderControlEmailID: `qEmailID${formId === 'SubmitQuery' ? '' : formId}`,
    SenderControlMsgID: `qMessage${formId === 'SubmitQuery' ? '' : formId}`,
  }

  const validate = useCallback(() => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required'
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Invalid contact number'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!formData.agreed) newErrors.agreed = 'You must agree to the terms'
    setErrors(newErrors)
    return !Object.keys(newErrors).length
  }, [formData])

  const handleChange = useCallback(({ target: { name, value, type, checked } }) => {
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }, [])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (!validate() || submitting) return
      setSubmitting(true)
      try {
        document.getElementById(FormInfo.SenderControlID).value = formData.name
        document.getElementById(FormInfo.SenderControlMobileID).value = formData.contact
        document.getElementById(FormInfo.SenderControlEmailID).value = formData.email
        document.getElementById(FormInfo.SenderControlMsgID).value = formData.message

        if (typeof window.SubmitQueryData === 'function') {
          await window.SubmitQueryData(AgentInfo, FormInfo)
          window.location.assign(AgentInfo.thankspageurl)
        } else {
          throw new Error('SubmitQueryData is not defined.')
        }
      } catch (error) {
        console.error('Form submission failed:', error)
        setErrors((prev) => ({ ...prev, submit: 'Submission failed. Please try again.' }))
      } finally {
        setSubmitting(false)
      }
    },
    [formData, validate, submitting, AgentInfo, FormInfo]
  )

  useEffect(() => {
    const preferedTime = document.getElementById('preferedtime')
    if (preferedTime) preferedTime.style.display = 'none'
  }, [])

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
        onLoad={() => console.log('jQuery loaded')}
      />
      <Script
        src="https://api2.gtftech.com/scripts/queryform.min.ssl.js"
        strategy="lazyOnload"
        onLoad={() => console.log('Query form script loaded')}
      />
      <form 
        onSubmit={handleSubmit}
        className="border-2 border-primary-color rounded-md px-[30px] py-8"
        noValidate
      >
          
              {via!=1 && <>
    <figure className='text-center'>
    <img src={process.env.NEXT_PUBLIC_BASE_PATH+'/logo.webp'} alt='logo' className='w-[110px] m-auto mb-[10px]' width={'80'} height={'120'} />
      <figcaption className='leading-[normal] pb-[30px] text-[14px] tracking-[1px]'>Join the Elite – Experience the Trump Legacy</figcaption>
    </figure>
              </>}

        <div className="mb-5">
          <input
            id={FormInfo.SenderControlID}
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#FFFFFF1A] px-4 py-[10px] text-[12px] font-[montserrat] tracking-normal placeholder:font-[montserrat] placeholder:text-primary-color placeholder:tracking-[3] border-b-[1px] border-primary-color"
            type="text"
            placeholder="NAME"
            aria-invalid={!!errors.name}
            disabled={submitting}
          />
          {errors.name && <p className="mt-1 text-[10px] text-red-500">{errors.name}</p>}
        </div>

        <div className="mb-5">
          <input
            id={FormInfo.SenderControlEmailID}
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#FFFFFF1A] px-4 py-[10px] text-[12px] font-[montserrat] tracking-normal placeholder:font-[montserrat] placeholder:text-primary-color placeholder:tracking-[3] border-b-[1px] border-primary-color"
            type="email"
            placeholder="EMAIL ID"
            aria-invalid={!!errors.email}
            disabled={submitting}
          />
          {errors.email && <p className="mt-1 text-[10px] text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-5">
          <input
            id={FormInfo.SenderControlMobileID}
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full bg-[#FFFFFF1A] px-4 py-[10px] text-[12px] font-[montserrat] tracking-normal placeholder:font-[montserrat] placeholder:text-primary-color placeholder:tracking-[3] border-b-[1px] border-primary-color"
            type="tel"
            placeholder="CONTACT NO."
            aria-invalid={!!errors.contact}
            disabled={submitting}
          />
          {errors.contact && <p className="mt-1 text-[10px] text-red-500">{errors.contact}</p>}
        </div>

        <div className="mb-5">
          <textarea
            id={FormInfo.SenderControlMsgID}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="2"
            className="w-full bg-[#FFFFFF1A] px-4 py-[10px] text-[12px] font-[montserrat] tracking-normal placeholder:font-[montserrat] placeholder:text-primary-color placeholder:tracking-[3] border-b-[1px] border-primary-color"
            placeholder="MESSAGE"
            aria-invalid={!!errors.message}
            disabled={submitting}
          />
          {errors.message && <p className="mt-1 text-[10px] text-red-500">{errors.message}</p>}
        </div>

        <div className="mb-3 inline-flex items-start">
          <label className="relative flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="peer cursor-pointer border border-primary-color shadow transition-all accent-primary-color hover:shadow-md"
              id="check"
              aria-invalid={!!errors.agreed}
              disabled={submitting}
            />
            <p className="montserrat text-[8px] font-[300] leading-[14px] lg:text-[10px]">
              I authorize company representatives to Call, SMS, Email or WhatsApp me about its
              products and offers. This consent overrides any registration for DNC/NDNC.
            </p>
          </label>
        </div>
        {errors.agreed && <p className="mt-1 text-[10px] text-red-500">{errors.agreed}</p>}
        {errors.submit && <p className="mt-1 text-[10px] text-red-500">{errors.submit}</p>}

        <div className="text-center">
          <button
            type="submit"
            id={formId}
            className="mt-10 inline-block px-[40px] text-[12px] font-[montserrat] font-[500] tracking-[1px] comment-button disabled:opacity-50"
            disabled={submitting}
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              'SUBMIT NOW'
            )}
          </button>
        </div>
      </form>
    </>
  )
}