import Airtable from "airtable";

// Initialize Airtable
const base = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
}).base(import.meta.env.VITE_AIRTABLE_BASE_ID!);

export interface ContactFormData {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone: string;
  projectDetails: string;
  timeline: string;
  referralSource: string;
  budgetRange: string;
}

export const submitToAirtable = async (formData: ContactFormData) => {
  try {
    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      throw new Error("Required fields are missing");
    }

    const record = await base(import.meta.env.VITE_AIRTABLE_TABLE_ID!).create({
      [import.meta.env.VITE_AIRTABLE_FIELD_FIRST_NAME!]: formData.firstName,
      [import.meta.env.VITE_AIRTABLE_FIELD_LAST_NAME!]: formData.lastName,
      [import.meta.env.VITE_AIRTABLE_FIELD_COMPANY!]: formData.company || "",
      [import.meta.env.VITE_AIRTABLE_FIELD_EMAIL!]: formData.email,
      [import.meta.env.VITE_AIRTABLE_FIELD_PHONE!]: formData.phone,
      [import.meta.env.VITE_AIRTABLE_FIELD_PROJECT_DETAILS!]:
        formData.projectDetails,
      [import.meta.env.VITE_AIRTABLE_FIELD_TIMELINE!]: formData.timeline,
      [import.meta.env.VITE_AIRTABLE_FIELD_REFERRAL_SOURCE!]:
        formData.referralSource,
      [import.meta.env.VITE_AIRTABLE_FIELD_BUDGET_RANGE!]: formData.budgetRange,
      [import.meta.env.VITE_AIRTABLE_FIELD_STATUS!]: "New",
      [import.meta.env.VITE_AIRTABLE_FIELD_SUBMISSION_DATE!]:
        new Date().toISOString(),
    });
    return { success: true, record };
  } catch (error: any) {
    console.error("Error submitting to Airtable:", error);
    // Return a more user-friendly error message
    return {
      success: false,
      error:
        error.message ||
        "Failed to submit form. Please try again or contact us directly.",
    };
  }
};
