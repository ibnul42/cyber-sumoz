import React from 'react'
import leftarrow from '../img/team/leftarrow.svg'
import rightarrow from '../img/team/rightarrow.svg'
import './team.scss'
import { useState } from 'react'

const team = [
    {
        title: 'Fomo Labs Inc',
        name: 'Parent Developer',
        desc: 'This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites.This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites.',
        imageLink: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGltZXxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
        title: 'Datasoft Inc',
        name: 'Backend Developer',
        desc: 'This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites.',
        imageLink: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80'
    }
]

function Team() {
    const [num, setNum] = useState(0)
    const [info, setInfo] = useState(team[num]);

    const increment = () => {
        if(num === team.length - 1){
            setNum(0)
        } else {
            setNum(num + 1)
        }
        setInfo(team[num])
    }

    const decrement = () => {
        if(num === 0){
            setNum(team.length - 1)
        } else{
            setNum(num - 1)
        }
        setInfo(team[num])
    }
  return (
    <div className='team'>
        <div className="team-content">
            <h1>Your Team</h1>
            <div className='bg-image'>
                <svg viewBox="0 0 1336 585" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_0_1)">
                    <rect x="713.938" y="96.7289" width="536.473" height="443.732" fill="url(#paint0_linear_0_1)" fill-opacity="0.5" shape-rendering="crispEdges"/>
                    </g>
                    <g filter="url(#filter1_d_0_1)">
                    <path d="M1187.63 82.0054C1187.63 79.1478 1190.02 76.8714 1192.87 77.0114L1296.07 82.0735C1304.05 82.4654 1310.33 89.0569 1310.33 97.0555V537.63C1310.33 545.571 1304.14 552.136 1296.21 552.604L1192.92 558.697C1190.05 558.866 1187.63 556.583 1187.63 553.706V500.994C1187.63 498.561 1189.38 496.481 1191.78 496.067L1247.9 486.387C1250.29 485.973 1252.05 483.893 1252.05 481.46V151.043C1252.05 148.577 1250.25 146.48 1247.81 146.102L1191.86 137.415C1189.42 137.037 1187.63 134.94 1187.63 132.475V82.0054Z" fill="url(#paint1_linear_0_1)"/>
                    <path d="M1192.77 79.009L1295.97 84.0711C1302.89 84.4107 1308.33 90.1234 1308.33 97.0555V537.63C1308.33 544.512 1302.97 550.202 1296.1 550.607L1192.8 556.7C1191.08 556.802 1189.63 555.432 1189.63 553.706V500.994C1189.63 499.534 1190.68 498.286 1192.12 498.038L1248.24 488.358C1251.59 487.779 1254.05 484.867 1254.05 481.46V151.043C1254.05 147.591 1251.53 144.655 1248.12 144.125L1192.17 135.439C1190.71 135.212 1189.63 133.954 1189.63 132.475V82.0054C1189.63 80.2909 1191.06 78.925 1192.77 79.009Z" stroke="#20C9FF" stroke-width="4"/>
                    </g>
                    <g filter="url(#filter2_d_0_1)">
                    <mask id="path-4-inside-1_0_1" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.3116 50.0818C29.0684 50.4436 25 54.8024 25 60.0581V489.141C25 493.021 27.2449 496.551 30.7591 498.197L158.603 558.065C159.931 558.686 161.379 559.008 162.844 559.008H741.143C746.456 559.008 750.841 554.855 751.129 549.55L761.133 365.101L733.704 356.562C731.614 355.911 730.19 353.976 730.19 351.788V145.106C730.19 142.729 731.863 140.68 734.193 140.206L773.767 132.15L776.748 77.1892C777.058 71.4619 772.498 66.6476 766.762 66.6476H438.943C436.424 66.6476 433.999 65.6974 432.15 63.9867L393.737 28.4344C391.714 26.5616 389.007 25.6074 386.256 25.7972L34.3116 50.0818Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.3116 50.0818C29.0684 50.4436 25 54.8024 25 60.0581V489.141C25 493.021 27.2449 496.551 30.7591 498.197L158.603 558.065C159.931 558.686 161.379 559.008 162.844 559.008H741.143C746.456 559.008 750.841 554.855 751.129 549.55L761.133 365.101L733.704 356.562C731.614 355.911 730.19 353.976 730.19 351.788V145.106C730.19 142.729 731.863 140.68 734.193 140.206L773.767 132.15L776.748 77.1892C777.058 71.4619 772.498 66.6476 766.762 66.6476H438.943C436.424 66.6476 433.999 65.6974 432.15 63.9867L393.737 28.4344C391.714 26.5616 389.007 25.6074 386.256 25.7972L34.3116 50.0818Z" fill="url(#paint2_linear_0_1)"/>
                    <path d="M34.3116 50.0818L34.6558 55.0699H34.6558L34.3116 50.0818ZM30.7591 498.197L28.6386 502.725H28.6387L30.7591 498.197ZM158.603 558.065L156.483 562.593L156.483 562.593L158.603 558.065ZM751.129 549.55L756.122 549.821V549.821L751.129 549.55ZM761.133 365.101L766.125 365.372L766.336 361.485L762.619 360.327L761.133 365.101ZM733.704 356.562L732.217 361.336H732.217L733.704 356.562ZM734.193 140.206L735.19 145.106L734.193 140.206ZM773.767 132.15L774.764 137.05L778.55 136.279L778.76 132.421L773.767 132.15ZM776.748 77.1892L781.74 77.46V77.4599L776.748 77.1892ZM432.15 63.9867L435.547 60.3172L435.547 60.3172L432.15 63.9867ZM393.737 28.4344L390.341 32.1039V32.1039L393.737 28.4344ZM386.256 25.7972L385.912 20.809L386.256 25.7972ZM30 60.0581C30 57.4302 32.0342 55.2508 34.6558 55.0699L33.9674 45.0936C26.1026 45.6363 20 52.1745 20 60.0581H30ZM30 489.141V60.0581H20V489.141H30ZM32.8796 493.669C31.1224 492.846 30 491.081 30 489.141H20C20 494.961 23.3674 500.256 28.6386 502.725L32.8796 493.669ZM160.724 553.536L32.8796 493.669L28.6387 502.725L156.483 562.593L160.724 553.536ZM162.844 554.008C162.112 554.008 161.388 553.847 160.724 553.536L156.483 562.593C158.474 563.525 160.646 564.008 162.844 564.008V554.008ZM741.143 554.008H162.844V564.008H741.143V554.008ZM746.136 549.279C745.992 551.931 743.8 554.008 741.143 554.008V564.008C749.112 564.008 755.69 557.778 756.122 549.821L746.136 549.279ZM756.14 364.831L746.136 549.279L756.122 549.821L766.125 365.372L756.14 364.831ZM762.619 360.327L735.19 351.788L732.217 361.336L759.646 369.875L762.619 360.327ZM735.19 351.788L735.19 351.788H725.19C725.19 356.165 728.038 360.034 732.217 361.336L735.19 351.788ZM735.19 351.788V145.106H725.19V351.788H735.19ZM735.19 145.106V145.106L733.195 135.307C728.537 136.255 725.19 140.352 725.19 145.106H735.19ZM735.19 145.106L774.764 137.05L772.77 127.251L733.195 135.307L735.19 145.106ZM771.755 76.9184L768.774 131.879L778.76 132.421L781.74 77.46L771.755 76.9184ZM766.762 71.6476C769.63 71.6476 771.91 74.0548 771.755 76.9184L781.74 77.4599C782.206 68.8691 775.366 61.6476 766.762 61.6476V71.6476ZM438.943 71.6476H766.762V61.6476H438.943V71.6476ZM428.754 67.6562C431.527 70.2222 435.165 71.6476 438.943 71.6476V61.6476C437.684 61.6476 436.471 61.1725 435.547 60.3172L428.754 67.6562ZM390.341 32.1039L428.754 67.6562L435.547 60.3172L397.133 24.7648L390.341 32.1039ZM386.6 30.7853C387.976 30.6904 389.329 31.1676 390.341 32.1039L397.133 24.7648C394.098 21.9557 390.038 20.5244 385.912 20.809L386.6 30.7853ZM34.6558 55.0699L386.6 30.7853L385.912 20.809L33.9674 45.0936L34.6558 55.0699Z" fill="#20C9FF" mask="url(#path-4-inside-1_0_1)"/>
                    </g>
                    <path d="M582.056 76.7542L761.509 77.8332C764.355 77.8504 766.612 80.2352 766.473 83.0772L764.503 123.394L728.046 130.672C723.37 131.606 720.004 135.711 720.004 140.479V355.181C720.004 359.367 722.61 363.11 726.536 364.561L750.041 373.251L741.383 542.85C741.247 545.509 739.052 547.595 736.39 547.595H382.921L582.056 76.7542Z" fill="#627A87" fill-opacity="0.15"/>
                    <circle cx="731.773" cy="103.149" r="16.8349" fill="#667178" stroke="#77858D" stroke-width="2"/>
                    <path d="M1286.51 521.199C1286.51 530.536 1279.25 538.034 1270.38 538.034C1261.52 538.034 1254.26 530.536 1254.26 521.199C1254.26 511.863 1261.52 504.364 1270.38 504.364C1279.25 504.364 1286.51 511.863 1286.51 521.199Z" fill="#667178" stroke="#77858D" stroke-width="2"/>
                    <path d="M1286.51 114.564C1286.51 123.9 1279.25 131.399 1270.38 131.399C1261.52 131.399 1254.26 123.9 1254.26 114.564C1254.26 105.227 1261.52 97.7289 1270.38 97.7289C1279.25 97.7289 1286.51 105.227 1286.51 114.564Z" fill="#667178" stroke="#77858D" stroke-width="2"/>
                    <defs>
                    <filter id="filter0_d_0_1" x="698.938" y="81.7289" width="566.473" height="473.732" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.145098 0 0 0 0 0.897412 0 0 0 0 1 0 0 0 0.75 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                    </filter>
                    <filter id="filter1_d_0_1" x="1162.63" y="52.0052" width="172.704" height="531.701" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="12.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.878431 0 0 0 0 1 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                    </filter>
                    <filter id="filter2_d_0_1" x="0" y="0.773438" width="801.763" height="583.235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="12.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.87451 0 0 0 0 0.945098 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_0_1" x1="857.517" y1="144.43" x2="1094.46" y2="603.225" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#89E6FB"/>
                    <stop offset="1" stop-color="#AFD6DF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_0_1" x1="1135.48" y1="76.7541" x2="1249.58" y2="549.235" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#425B6A"/>
                    <stop offset="1" stop-color="#41494E"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_0_1" x1="449.16" y1="44.9152" x2="490.968" y2="670.017" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#425E6D"/>
                    <stop offset="1" stop-color="#414344"/>
                    </linearGradient>
                    </defs>
                </svg>
                <div className="content-body">
                    <div className="left-menu">
                        <h1 className='check'>ユーザー</h1>
                        <div className="info">
                            <p className='name'>{info.title}</p>
                            <p className='title'>{info.name}</p>
                        </div>
                        <p className='description'>{info.desc}</p>
                        <div className="buttons">
                            <img src={leftarrow} alt="left" onClick={decrement} />
                            <img src={rightarrow} alt="right" onClick={increment} />
                        </div>
                    </div>
                    <div className="right-menu">
                        <img src={info.imageLink} alt={info.name} />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Team