import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/SmsrtWatch-Landing_page/", // রিপো নাম এখানে দিতে হবে
  plugins: [react()],
});
