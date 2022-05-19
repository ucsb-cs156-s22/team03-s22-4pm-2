import OurTable, { ButtonColumn} from "main/components/OurTable";
import { useBackendMutation } from "main/utils/useBackend";
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/MenuItemReviewUtils"
import { hasRole } from "main/utils/currentUser";

export default function MenuItemReviewsTable({ menuItemReviews, currentUser }) {

    const deleteMutation = useBackendMutation(
        cellToAxiosParamsDelete,
        { onSuccess: onDeleteSuccess },
        ["/api/MenuItemReview/all"]
    );

    const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    const columns = [
        {
            Header: 'ID',
            accessor: 'id', 
        },
        {
            Header: 'Menu Item ID',
            accessor: 'itemId',
        },
        {
            Header: 'Reviewer/Critic Email',
            accessor: 'reviewerEmail',
        },
        {
            Header: 'Number of Stars',
            accessor: 'stars',
        },
        {
            Header: 'Date Reviewed',
            accessor: 'dateReviewed',
        },
        {
            Header: 'Comments',
            accessor: 'comments',
        }
    ];

    const testid = "MenuItemReviewsTable";

    const columnsIfAdmin = [
        ...columns,
        
        ButtonColumn("Delete", "danger", deleteCallback, testid)
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    return <OurTable
        data={menuItemReviews}
        columns={columnsToDisplay}
        testid={testid}
    />;
};
