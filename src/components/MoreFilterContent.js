import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { RoomContext } from "../context";
import { useContext } from "react";

const GreenCheckbox = withStyles({
    root: {
        color: "#1abda0",
        "&$checked": {
            color: "#1abda2",
        },
    },
    checked: {},
})(props => <Checkbox color='default' {...props} />);

export default function MoreFilterContent() {
    const context = useContext(RoomContext);
    const {
        handleChange,
        handicap,
        whiteBoard,
        wifi,
        paperBoard,
        projector,
    } = context;
    return (
        <>
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={handicap}
                        onChange={handleChange}
                        name='handicap'
                    />
                }
                label='Accès handicapé'
            />
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={whiteBoard}
                        onChange={handleChange}
                        name='whiteBoard'
                    />
                }
                label='Tableaux Blanc'
            />
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={paperBoard}
                        onChange={handleChange}
                        name='paperBoard'
                    />
                }
                label='Paper Board'
            />
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={projector}
                        onChange={handleChange}
                        name='projector'
                    />
                }
                label='Projecteur'
            />
            <FormControlLabel
                control={
                    <GreenCheckbox
                        checked={wifi}
                        onChange={handleChange}
                        name='wifi'
                    />
                }
                label='Wifi'
            />
        </>
    );
}
