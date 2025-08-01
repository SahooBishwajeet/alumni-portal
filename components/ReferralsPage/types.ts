export interface JobDetails {
  title: string;
  description: string;
  company: string;
  role: string;
  link: string;
}

export interface Referral {
  id: string;
  isActive: boolean;
  numberOfReferrals: number;
  jobDetails: JobDetails;
  postedBy: {
    id: string;
    name: string;
    collegeEmail: string;
    personalEmail: string;
  };
  postedOn: string;
  lastApplyDate: string;
}

export interface ReferralFormData {
  jobDetails: JobDetails;
  lastApplyDate: string;
  numberOfReferrals: number;
  isActive?: boolean;
}

export interface ReferralFilters {
  month: number | "";
  year: number | "";
}

export interface Submission {
  referralId: {
    jobDetails: JobDetails;
    id: string;
  };
  userId: {
    name: string;
    collegeEmail: string;
    personalEmail: string;
    id: string;
  };
  resumeLink: string;
  coverLetter: string;
  whyReferMe: string;
  status: "pending" | "accepted" | "rejected";
  id: string;
  submittedAt: string;
}
