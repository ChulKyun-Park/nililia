"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "Document Translation",
  "Website Localization",
  "Marketing Content",
  "Legal & Compliance",
  "Technical Documentation",
  "Multimedia & Subtitling",
] as const;

const maxDescriptionLength = 500;

export default function InquiryForm() {
  const [description, setDescription] = useState("");
  const remainingCharacters = useMemo(
    () => maxDescriptionLength - description.length,
    [description],
  );

  return (
    <form className="space-y-5" aria-label="Project inquiry form">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-gray-700">
          Name
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-gray-700">
          Email
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-gray-700">
          Company
          <input
            type="text"
            name="company"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-gray-700">
          Phone
          <input
            type="tel"
            name="phone"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-gray-700">
        Interested Service
        <select
          name="service"
          required
          defaultValue=""
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2 text-sm font-medium text-gray-700">
        Project Description
        <textarea
          name="description"
          required
          value={description}
          onChange={(event) => setDescription(event.target.value.slice(0, maxDescriptionLength))}
          maxLength={maxDescriptionLength}
          rows={6}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
        />
        <span className="block text-right text-xs text-gray-500">{remainingCharacters} characters remaining</span>
      </label>

      <Button type="submit" variant="primary">
        Submit Inquiry
      </Button>
    </form>
  );
}
