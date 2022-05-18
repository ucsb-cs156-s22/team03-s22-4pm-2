import React from 'react'
import { useBackend } from 'main/utils/useBackend';
import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
import MenuItemReviewsTable from 'main/components/MenuItemReviews/MenuItemReviewsTable';
import { useCurrentUser } from 'main/utils/currentUser'

export default function MenuItemReviewIndexPage() {

  const currentUser = useCurrentUser();

  const { data: menuItemReviews, error: _error, status: _status } =
    useBackend(
      ["/api/MenuItemReview/all"],
            { method: "GET", url: "/api/MenuItemReview/all" },
      []
    );
    
  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Menu Item Reviews</h1>
        <MenuItemReviewsTable menuItemReviews={menuItemReviews} currentUser={currentUser} />
      </div>
    </BasicLayout>
  )
}
