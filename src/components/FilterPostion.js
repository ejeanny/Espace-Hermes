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

    const { u, square, handleChange, classPosition, theater } = context;

    return (
        <>
            <input
                type='checkbox'
                id='square'
                onClick={handleChange}
                name='square'
            />
            <input type='checkbox' id='u' onClick={handleChange} name='u' />
            <input
                type='checkbox'
                id='classPosition'
                onClick={handleChange}
                name='classPosition'
            />
            <input
                type='checkbox'
                id='theater'
                onClick={handleChange}
                name='theater'
            />
            <span>
                <label htmlFor='square'>
                    <RadioText grey={square}>
                        <Tooltip title='Salle en carré' placement='top' arrow>
                            <img src={squareImg} alt='' />
                        </Tooltip>
                    </RadioText>
                </label>
            </span>
            <span>
                <label htmlFor='u'>
                    <RadioText grey={u}>
                        <Tooltip title='Salle en U' placement='top' arrow>
                            <img src={uImg} alt='' />
                        </Tooltip>
                    </RadioText>
                </label>
            </span>
            <span>
                <label htmlFor='classPosition'>
                    <RadioText grey={classPosition}>
                        <Tooltip title='Salle de classe' placement='top' arrow>
                            <img src={classRoomImg} alt='' />
                        </Tooltip>
                    </RadioText>
                </label>
            </span>
            <span>
                <label htmlFor='theater'>
                    <RadioText grey={theater}>
                        <Tooltip title='en théatre' placement='top' arrow>
                            <img src={theaterImg} alt='' />
                        </Tooltip>
                    </RadioText>
                </label>
            </span>
        </>
    );
}
