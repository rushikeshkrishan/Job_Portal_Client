
import JobCard from '@/components/job-card'
import React, { Suspense } from 'react'
Suspense

function JobPage() {
  return (
    <Suspense fallback={"loading"}>
      <JobCard />
    </Suspense>
  )
}

export default JobPage