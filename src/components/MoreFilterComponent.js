import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MoreFilterContent from "./MoreFilterContent";
const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
export default function MoreFilterComponent() {
    const classes = useStyles();
    return (
        <>
            <div className='more-filter'>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1b-content'
                        id='panel1b-header'>
                        <Typography className={classes.heading}>
                            Plus de filtre
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography></Typography>
                        <div className='more-filter-checkbox'>
                            <MoreFilterContent></MoreFilterContent>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/* 
            {opened && <div className='more-filter-content'></div>} */}
            </div>
        </>
    );
}
