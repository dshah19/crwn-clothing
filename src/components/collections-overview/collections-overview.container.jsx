import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.components";
import collectionsOverview from "./collections-overview.components";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsLoaded
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;