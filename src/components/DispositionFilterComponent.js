import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import FilterPostion from "./FilterPostion";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function MoreFilterComponent({ title }) {
    const classes = useStyles();

    return (
        <div className='more-filter '>
            {/* <div className='more-filter-title'>
                <p>{title}</p>
                <button
                    type='button'
                    className='border-none'
                    onClick={toggleBox}>
                    <FaAlignRight className='nav-icon-main'></FaAlignRight>
                </button>
            </div> */}
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'>
                    <Typography className={classes.heading}>
                        Disposition
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className='more-filter-content'>
                        <FilterPostion />
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            {/* 
            {opened && <div className='more-filter-content'></div>} */}
        </div>
    );
}
