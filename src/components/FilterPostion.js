import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { useContext } from "react";

import squareImg from "../images/square_disposition.svg";
import classRoomImg from "../images/classroom_disposition.svg";
import uImg from "../images/u_disposition.svg";
import theaterImg from "../images/theater_disposition.svg";

import RadioText from "../components/CapacityHero";
import { RoomContext } from "../context";

export default function FilterPostion() {
    const context = useContext(RoomContext);

    const {
        u,
        square,
        handleRadio,
        classPosition,
        theater,
        wifi,
        whiteBoard,
        projector,
        handicap,
    } = context;

    return (
        <>
            <input type='radio' id='u' onClick={handleRadio} name='position' />
            <input
                type='radio'
                id='square'
                name='position'
                onClick={handleRadio}
            />
            <input
                type='radio'
                id='classPosition'
                name='position'
                onClick={handleRadio}
            />
            <input
                type='radio'
                id='theater'
                name='position'
                onClick={handleRadio}
            />
            <span>
                <label htmlFor='square'>
                    <RadioText grey={square}>
                        <Tooltip title='Salle en carré' placement='top' arrow>
                            <img src={squareImg} />
                        </Tooltip>
                    </RadioText>
                </label>
            </span>
            <span>
                <label htmlFor='u'>
                    <RadioText grey={u}>
                        <Tooltip title='Salle en U' placement='top' arrow>
                            <img src={uImg} />
                        </Tooltip>
                    </RadioText>
                </label>
            </span>
            <span>
                <label htmlFor='classPosition'>
                    <RadioText grey={classPosition}>
                        <Tooltip title='Salle de classe' placement='top' arrow>
                            <img src={classRoomImg} />
                        </Tooltip>
                    </RadioText>
                </label>
            </span>
            <span>
                <label htmlFor='theater'>
                    <RadioText grey={theater}>
                        <Tooltip title='en théatre' placement='top' arrow>
                            <img src={theaterImg} />
                        </Tooltip>
                    </RadioText>
                </label>
            </span>
        </>
    );
}
