
import React from 'react'
import { useBackend } from 'main/utils/useBackend'; // use prefix indicates a React Hook

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import RecommendationTable from 'main/components/Recommendation/RecommendationTable';
import { useCurrentUser } from 'main/utils/currentUser' // use prefix indicates a React Hook

export default function RecommendationIndexPage() {

  const currentUser = useCurrentUser();

  const { data: recommendations, error: _error, status: _status } =
    useBackend(
      // Stryker disable next-line all : don't test internal caching of React Query
      ["/api/recommendation/all"],
            // Stryker disable next-line StringLiteral,ObjectLiteral : since "GET" is default, "" is an equivalent mutation
            { method: "GET", url: "/api/recommendation/all" },
      []
    );


  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Recommendation</h1>

        <RecommendationTable recommendations={recommendations} currentUser={currentUser} />

      </div>
    </BasicLayout>
  )
}