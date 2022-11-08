import { useState, useRef } from 'react';
import { audio } from './audio';
import icon from './accets/icon.png'
import { FastBackwardOutlined, FastForwardOutlined, PauseOutlined, PlayCircleFilled } from '@ant-design/icons';
function Music() {
    const [aud, setAud] = useState(0)
    const [stop, setStop] = useState(true)
    const myRef = useRef();
    const back = () => {
        setAud(aud - 1)
        setStop(true)
    }
    const forward = () => {
        setAud(aud + 1)
        setStop(true)
    }
    const backs = () => {
        setAud(aud + 34)
        setStop(true)
    }
    const forwards = () => {
        setAud(aud - 34)
        setStop(true)
    }
    const stops = () => {
        myRef.current.play();
        setStop(true)
    }
    const sto = () => {
        myRef.current.pause();
        setStop(false)
    }
    return (
        <>
            <div className='main'>
                <div className='card'>
                    <div className='inner_card' >
                        <img className='imgs' src={audio[aud].img} />
                        {stop !== false ?
                            <>
                                <div className="now playing" id="music">
                                    <span className="bar n1"></span>
                                    <span className="bar n2"></span>
                                    <span className="bar n3"></span>
                                    <span className="bar n4"></span>
                                    <span className="bar n5"></span>
                                    <span className="bar n6"></span>
                                    <span className="bar n7"></span>
                                    <span className="bar n8"></span>
                                </div>
                            </>
                            :
                            <>
                                <div className="now playing d" id="music">
                                    <span className="br a1"></span>
                                    <span className="br a2"></span>
                                    <span className="br a3"></span>
                                    <span className="br a4"></span>
                                    <span className="br a5"></span>
                                    <span className="br a6"></span>
                                    <span className="br a7"></span>
                                    <span className="br a8"></span>
                                </div>
                            </>
                        }
                    </div>
                    <marquee behavior="scroll" scrollamount="5" direction="right" width='30%' className='marquee' >{audio[aud].title} Song Mp3</marquee>
                    <div className='main_body'>
                        <audio ref={myRef} src={audio[aud].mp} controls autoPlay >
                        </audio>
                        <br />
                        <br />
                        <div className='btn_div'>
                            {aud === 0 ?
                                <button onClick={backs} className='btn'> <FastBackwardOutlined /></button>
                                :
                                <button onClick={back} className='btn'> <FastBackwardOutlined /></button>
                            }
                            {stop === true ?
                                <button onClick={sto}> <PauseOutlined /></button>
                                :
                                <button onClick={stops}><PlayCircleFilled /></button>
                            }
                            {aud === 34 ?
                                <button onClick={forwards} className='btn1'>  <FastForwardOutlined /></button>
                                :
                                <button onClick={forward} className='btn1'>  <FastForwardOutlined /></button>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Music