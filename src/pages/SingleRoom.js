/*****NPM components ********/
import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import HoverText from "../components/CapacityHero";
import ModalImage from "react-modal-image";
import { FaWheelchair } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { Link } from "react-router-dom";

/******* Context *******/
import { RoomContext } from "../context";

/******** Components ********/
import Hero from "../components/Hero";
import Baner from "../components/Banner";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

/****** Image *******/
import defaultBcg from "../images/defaultBcg.jpeg";
import squareImg from "../images/square_disposition.svg";
import classRoomImg from "../images/classroom_disposition.svg";
import uImg from "../images/u_disposition.svg";
import theaterImg from "../images/theater_disposition.svg";

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            slug: this.props.match.params.slug,
            hover: false,
            defaultBcg,
        };
    }
    static contextType = RoomContext;

    // hoverOn = () => {
    //     this.r;
    // };
    // hoverOff = () => {
    //     this.setState({ hover: false });
    // };

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return (
                <div className='error'>
                    <h3>La salles n'a pas été trouvée</h3>
                    <Link to='/rooms' className='btn-primary'>
                        Retour
                    </Link>
                </div>
            );
        }

        const {
            name,
            description,
            surface,
            classPosition,
            classRoomCapacity,
            images,
            option,
            paperBoard,
            price,
            projector,
            square,
            squareCapacity,
            stare,
            theater,
            theaterCapacity,
            u,
            uCapacity,
            whiteBoard,
            wifi,
            handicap,
        } = room;
        const imgHover = this.state.hover;
        const [mainImg, ...defaultImg] = images;
        console.log(uCapacity);
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`salle ${name}`}>
                        <Link to='/salles' className='btn-primary-main'>
                            Retour
                        </Link>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {defaultImg.map((item, index) => {
                            return (
                                <ModalImage
                                    key={index}
                                    small={item}
                                    medium={item}
                                    alt={name}></ModalImage>
                            );
                        })}
                    </div>
                    <div className='single-room-info'>
                        <article className='desc'>
                            <h3>Description</h3>
                            <p>{description}</p>
                        </article>

                        <article className='info-main'>
                            <h3>Information</h3>
                            <h6>Prix: {price} €</h6>
                            <h6>Surface : {surface} m²</h6>
                            <h6>
                                Etage :{" "}
                                {stare > 1
                                    ? `${stare}eme`
                                    : stare === 1
                                    ? `${stare}er`
                                    : "Rez de chaussée"}
                            </h6>
                            <h6>
                                {handicap && <FaWheelchair />}
                                {handicap && "Accès handicapé"}
                            </h6>
                        </article>
                    </div>
                </section>
                <section className='single-room-capacity container'>
                    <table className='table table-borderless'>
                        <tbody>
                            <tr className=' single-room-table-row'>
                                <th
                                    scope='row'
                                    className='single-room-table-title'>
                                    <p>Dispositions possibles</p>
                                </th>
                                <td className='text-center'>
                                    <HoverText grey={square}>
                                        <Tooltip
                                            title='Table rectangulaire'
                                            placement='top'
                                            arrow>
                                            <img src={squareImg} />
                                        </Tooltip>
                                    </HoverText>
                                </td>
                                <td className='text-center'>
                                    <HoverText grey={u}>
                                        <Tooltip
                                            title='Salle en U'
                                            placement='top'
                                            arrow>
                                            <img src={uImg} />
                                        </Tooltip>
                                    </HoverText>
                                </td>
                                <td className='text-center'>
                                    <HoverText grey={classPosition}>
                                        <Tooltip
                                            title='Salle de classe'
                                            placement='top'
                                            arrow>
                                            <img src={classRoomImg} />
                                        </Tooltip>
                                    </HoverText>
                                </td>
                                <td className='text-center'>
                                    <HoverText grey={theater}>
                                        <Tooltip
                                            title='en théatre'
                                            placement='top'
                                            arrow>
                                            <img src={theaterImg} />
                                        </Tooltip>
                                    </HoverText>
                                </td>
                            </tr>
                            <tr>
                                <th
                                    scope='row'
                                    className='single-room-table-title'>
                                    <p>Nombre de participant maximum</p>
                                </th>
                                <td className='text-center'>
                                    <span>
                                        {square ? `${squareCapacity}` : "-"}
                                    </span>
                                </td>
                                <td className='text-center'>
                                    <span>{u ? `${uCapacity}` : "-"}</span>
                                </td>
                                <td className='text-center'>
                                    <span>
                                        {classPosition
                                            ? `${classRoomCapacity}`
                                            : "-"}
                                    </span>
                                </td>
                                <td className='text-center'>
                                    <span>
                                        {theater ? `${theaterCapacity}` : "-"}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div className='row'>
                            <div className='col-12 col-md-2 single-room-capacity'>
                                <h6>Dispositions possibles</h6>
                            </div>
                            <div className='col-12 col-md-10'>
                               
                                <div className='justify-content-start d-flex '>
                                    <div className='single-room-capacity text-center'>
                                        <HoverText grey={square}>
                                            <Tooltip
                                                title='Table rectangulaire'
                                                placement='top'
                                                arrow>
                                                <img src={squareImg} />
                                            </Tooltip>
                                        </HoverText>
                                    </div>
                                    <div className='single-room-capacity text-center'>
                                        <HoverText grey={u}>
                                            <Tooltip
                                                title='Salle en U'
                                                placement='top'
                                                arrow>
                                                <img src={uImg} />
                                            </Tooltip>
                                        </HoverText>
                                    </div>
                                    <div className='single-room-capacity  text-center'>
                                        <HoverText grey={classPosition}>
                                            <Tooltip
                                                title='Salle de classe'
                                                placement='top'
                                                arrow>
                                                <img src={classRoomImg} />
                                            </Tooltip>
                                        </HoverText>
                                    </div>
                                    <div className='single-room-capacity  text-center'>
                                        <HoverText grey={theater}>
                                            <Tooltip
                                                title='en théatre'
                                                placement='top'
                                                arrow>
                                                <img src={theaterImg} />
                                            </Tooltip>
                                        </HoverText>
                                    </div>
                                    <hr className='hr-sm my-3'></hr>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-2 single-room-capacity'>
                                <h6>Nombre de participant maximum</h6>
                            </div>
                            <div className='justify-content-start d-flex'>
                                <div className='single-room-capacity'>
                                    <p>{square ? `${squareCapacity}` : "-"}</p>
                                </div>
                                <div className='single-room-capacity text-center '>
                                    <p>{u ? `${uCapacity}` : "-"}</p>
                                </div>
                                <div className='single-room-capacity text-center '>
                                    <p>
                                        {classPosition
                                            ? `${classRoomCapacity}`
                                            : "-"}
                                    </p>
                                </div>
                                <div className='single-room-capacity text-center '>
                                    <p>
                                        {theater ? `${theaterCapacity}` : "-"}
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                    {/* </div> */}
                </section>
                <section className='extras'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h5>Options</h5>
                                <ul className='extras'>
                                    {option.map((item, index) => {
                                        return <li key={index}>-{item}</li>;
                                    })}
                                </ul>
                            </div>
                            <div className='col-md-6 room-item'>
                                <h5>A disposition</h5>
                                <div
                                    className={
                                        !projector ? "hide-info" : "show-info"
                                    }>
                                    <div className='equipement row'>
                                        <Tooltip
                                            title='Vidéo projecteur'
                                            placement='top'
                                            arrow>
                                            <div>
                                                <AiOutlineVideoCamera />
                                            </div>
                                        </Tooltip>
                                        <div className='equipement-description col-md-10'>
                                            <h6>Vidéo projecteur</h6>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        !projector ? "hide-info" : "show-info"
                                    }>
                                    <div className='equipement row'>
                                        <Tooltip
                                            title='Wifi'
                                            placement='top'
                                            arrow>
                                            <div>
                                                <FaWifi />
                                            </div>
                                        </Tooltip>
                                        <div className='equipement-description col-md-10'>
                                            <h6>Wifi</h6>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        !paperBoard ? "hide-info" : "show-info"
                                    }>
                                    <div className='equipement row'>
                                        <Tooltip
                                            title='Paper board'
                                            placement='top'
                                            arrow>
                                            <div>
                                                <FaRegClipboard />
                                            </div>
                                        </Tooltip>
                                        <div className='equipement-description col-md-10'>
                                            <h6>Paper Board</h6>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        !whiteBoard ? "hide-info" : "show-info"
                                    }>
                                    <div className='equipement row'>
                                        <Tooltip
                                            title='Tableaux blanc'
                                            placement='top'
                                            arrow>
                                            <div className=''>
                                                <FaChalkboard />
                                            </div>
                                        </Tooltip>
                                        <div className='equipement-description col-md-10'>
                                            <h6>Tableaux blanc</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
