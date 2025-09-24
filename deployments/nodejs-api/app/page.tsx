"use client";

import { I18nProviderClient } from "../locales/client";
import HomePage from "@/components/HomePage";

export default function RootPage() {
  return (
    <I18nProviderClient locale="en">
      <HomePage />
    </I18nProviderClient>
  );
}
