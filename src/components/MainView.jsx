import "../general.css";
import {Route, Routes, useNavigate} from "react-router-dom";
import Background from "./Background";
import MenuTop from "./MenuTop";
import InfoCard from "./InfoCard";
import NavButton from "./UI/NavButton";
import AvailableGames from "./SubViews/AvailableGames";
import { useLocation } from 'react-router-dom';
import {React, useState} from "react";
import MainFooter from "./MainFooter";
import LiveGames from "./SubViews/LiveGames";

const MainView = () => {
    const navigate = useNavigate();
    const [popup, setPop] = useState(<></>)
    const [subView, setSubView] = useState("available-games")
    const playerIcon = () => {
        return (
            <svg id="groupe-d_utilisateurs" data-name="groupe-d'utilisateurs" xmlns="http://www.w3.org/2000/svg"
                 width="100%" height="100%" viewBox="0 0 45.745 32.914" fit="" preserveAspectRatio="xMidYMid meet"
                 focusable="false">
                <g id="Group_9" data-name="Group 9">
                    <path id="Path_36" data-name="Path 36"
                          d="M135.763,45.841a8.229,8.229,0,0,0,8.087-8.364c0-4.619-1.189-8.364-8.087-8.364s-8.088,3.745-8.088,8.364A8.229,8.229,0,0,0,135.763,45.841Z"
                          transform="translate(-112.89 -29.114)" fill="#be3131"></path>
                    <path id="Path_37" data-name="Path 37"
                          d="M97.65,208.487c-.142-8.047-1.315-10.339-10.292-11.791a5.663,5.663,0,0,1-4.209,1.442A5.662,5.662,0,0,1,78.94,196.7c-8.879,1.436-10.124,3.694-10.287,11.529-.013.64-.019.673-.022.6,0,.139,0,.4,0,.845,0,0,2.137,3.86,14.517,3.86s14.517-3.86,14.517-3.86c0-.288,0-.489,0-.625A4.542,4.542,0,0,1,97.65,208.487Z"
                          transform="translate(-60.277 -180.616)" fill="#be3131"></path>
                    <path id="Path_38" data-name="Path 38"
                          d="M264.691,58.6a6.683,6.683,0,0,0,6.568-6.793c0-3.752-.966-6.793-6.568-6.793a10.922,10.922,0,0,0-2.451.248,11.966,11.966,0,0,1,1.471,6.468,10.236,10.236,0,0,1-2.017,6.121A6.362,6.362,0,0,0,264.691,58.6Z"
                          transform="translate(-231.352 -43.37)" fill="#be3131"></path>
                    <path id="Path_39" data-name="Path 39"
                          d="M296.508,190.7c-.122-6.535-1.124-8.4-8.8-9.576a4.969,4.969,0,0,1-3.6,1.172c-.1,0-.2,0-.3-.007a10.049,10.049,0,0,1,4.125,2.719c1.852,2.162,2.278,5.067,2.366,9.334,5.161-.868,6.219-2.682,6.219-2.682,0-.236,0-.4,0-.509A3.254,3.254,0,0,1,296.508,190.7Z"
                          transform="translate(-250.778 -166.338)" fill="#be3131"></path>
                    <path id="Path_40" data-name="Path 40"
                          d="M54.523,58.6a6.364,6.364,0,0,0,3-.749A10.237,10.237,0,0,1,55.5,51.734a11.968,11.968,0,0,1,1.471-6.468,10.918,10.918,0,0,0-2.451-.248c-5.6,0-6.568,3.041-6.568,6.793A6.683,6.683,0,0,0,54.523,58.6Z"
                          transform="translate(-42.117 -43.371)" fill="#be3131"></path>
                    <path id="Path_41" data-name="Path 41"
                          d="M12.71,182.289c-.1,0-.2.007-.3.007a4.969,4.969,0,0,1-3.6-1.172C1.138,182.3.135,184.165.014,190.7a3.38,3.38,0,0,1-.014.452c0,.111,0,.273,0,.509,0,0,1.058,1.813,6.218,2.682.088-4.267.514-7.172,2.366-9.334A10.05,10.05,0,0,1,12.71,182.289Z"
                          transform="translate(0 -166.337)" fill="#be3131"></path>
                </g>
            </svg>
        )
    }
    const casinoIcon = () => {
        return (
            <svg id="casino-en-ligne" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                 viewBox="0 0 39.067 38.902" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g id="Group_4" data-name="Group 4">
                    <g id="Group_3" data-name="Group 3">
                        <g id="Page-1_26_">
                            <g id="_x30_27---Online-Gambling">
                                <g id="Group_2" data-name="Group 2">
                                    <path id="Path_226_"
                                          d="M80.055,196.48a34.481,34.481,0,0,1-3.462-.957,25.165,25.165,0,0,0-.936,6.214h2.815A11.773,11.773,0,0,1,80.055,196.48Z"
                                          transform="translate(-70.773 -182.985)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_225_"
                                          d="M100.575,102.369a11.822,11.822,0,0,1,1.052-1.212,33.689,33.689,0,0,1,.889-3.713,18.682,18.682,0,0,1-3.249-1.192,20.93,20.93,0,0,0-2.572,5.077A33.745,33.745,0,0,0,100.575,102.369Z"
                                          transform="translate(-90.454 -90.121)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_224_"
                                          d="M99.246,409.805c-.271-.97-.511-1.993-.712-3.072a12.03,12.03,0,0,1-1.491-1.808,32.665,32.665,0,0,0-3.646,1.013,21.4,21.4,0,0,0,2.434,5.182A18.491,18.491,0,0,1,99.246,409.805Z"
                                          transform="translate(-87.367 -378.87)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_223_"
                                          d="M219.8,1.276c-1.6.385-3.158,2.108-4.417,4.946-.195.436-.377.894-.551,1.366a27.318,27.318,0,0,0,4.968.552Z"
                                          transform="translate(-200.965 -1.276)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_222_"
                                          d="M466.659,318.068a33.841,33.841,0,0,1,3.3.935,25.315,25.315,0,0,0,.765-5.572H467.9A11.763,11.763,0,0,1,466.659,318.068Z"
                                          transform="translate(-436.537 -293.282)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_221_"
                                          d="M76.421,319a33.847,33.847,0,0,1,3.3-.935,11.766,11.766,0,0,1-1.246-4.637H75.656A25.311,25.311,0,0,0,76.421,319Z"
                                          transform="translate(-70.772 -293.283)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_220_"
                                          d="M464.9,195.523a34.352,34.352,0,0,1-3.462.956,11.773,11.773,0,0,1,1.583,5.258h2.815A25.162,25.162,0,0,0,464.9,195.523Z"
                                          transform="translate(-431.649 -182.985)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_219_"
                                          d="M120.288,35.972a17.939,17.939,0,0,1,2.13-2.254,19.552,19.552,0,0,0-2.833,1.793C119.808,35.668,120.037,35.823,120.288,35.972Z"
                                          transform="translate(-111.866 -31.624)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_218_"
                                          d="M488.73,75.678a10.847,10.847,0,0,1-.977.67,22.406,22.406,0,0,1,2.649,5.261,19.837,19.837,0,0,0,2.312-1.077A19.669,19.669,0,0,0,488.73,75.678Z"
                                          transform="translate(-456.269 -70.875)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_217_"
                                          d="M355.771,120.182a11.805,11.805,0,0,1,3.212,1.53c-.162-.689-.344-1.342-.538-1.975A27.026,27.026,0,0,1,355.771,120.182Z"
                                          transform="translate(-332.806 -112.09)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_216_"
                                          d="M372.279,16.332a14.258,14.258,0,0,0-5.735-4.3,14.408,14.408,0,0,1,2.265,3.685c.228.511.442,1.052.644,1.614A17.74,17.74,0,0,0,372.279,16.332Z"
                                          transform="translate(-342.884 -11.335)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_215_"
                                          d="M149.831,16.353a17.655,17.655,0,0,0,2.826,1c.2-.559.419-1.1.645-1.616a14.43,14.43,0,0,1,2.263-3.684A14.255,14.255,0,0,0,149.831,16.353Z"
                                          transform="translate(-140.16 -11.355)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_214_"
                                          d="M443.887,35.972c.251-.149.483-.3.7-.461a19.546,19.546,0,0,0-2.833-1.793A17.923,17.923,0,0,1,443.887,35.972Z"
                                          transform="translate(-413.242 -31.624)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_213_"
                                          d="M313.432,1.3V8.16a27.315,27.315,0,0,0,4.968-.552c-.175-.473-.356-.931-.55-1.366-1.257-2.831-2.812-4.553-4.418-4.945Z"
                                          transform="translate(-293.2 -1.297)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_212_"
                                          d="M0,177.786H3.487A26.449,26.449,0,0,1,4.508,171.1a21.373,21.373,0,0,1-2.545-1.179A19.424,19.424,0,0,0,0,177.786Z"
                                          transform="translate(0 -159.033)" fill="#be3131" fillRule="evenodd"></path>
                                    <path id="Path_211_"
                                          d="M199.677,121.71a11.824,11.824,0,0,1,3.212-1.529,26.727,26.727,0,0,1-2.675-.445C200.019,120.369,199.837,121.023,199.677,121.71Z"
                                          transform="translate(-186.788 -112.09)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_210_"
                                          d="M418.36,97.432a34.733,34.733,0,0,1,.9,3.72,12.054,12.054,0,0,1,1.047,1.207,33.8,33.8,0,0,0,3.879-1.04,20.924,20.924,0,0,0-2.573-5.078A18.732,18.732,0,0,1,418.36,97.432Z"
                                          transform="translate(-391.355 -90.111)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_209_"
                                          d="M423.408,404.9a12.019,12.019,0,0,1-1.492,1.808c-.2,1.081-.441,2.1-.712,3.072a18.45,18.45,0,0,1,3.416,1.314,21.4,21.4,0,0,0,2.434-5.182A32.584,32.584,0,0,0,423.408,404.9Z"
                                          transform="translate(-394.016 -378.849)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_208_"
                                          d="M149.8,507.137a14.4,14.4,0,0,1-2.265-3.685c-.312-.7-.591-1.462-.853-2.254a17.36,17.36,0,0,0-3.015,1.132A14.5,14.5,0,0,0,149.8,507.137Z"
                                          transform="translate(-134.392 -468.93)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_207_"
                                          d="M113.445,529.291a8.3,8.3,0,0,0-.783.582,19.6,19.6,0,0,0,3.282,2.144A18.157,18.157,0,0,1,113.445,529.291Z"
                                          transform="translate(-105.39 -495.208)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_206_"
                                          d="M201.526,455.929a11.792,11.792,0,0,1-1.871-1.029c.107.456.225.892.349,1.323C200.5,456.113,201,456.012,201.526,455.929Z"
                                          transform="translate(-186.767 -425.619)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_205_"
                                          d="M216.653,494.452V486.9a28.623,28.623,0,0,0-5.185.6c.237.707.489,1.388.768,2.013C213.492,492.339,215.047,494.061,216.653,494.452Z"
                                          transform="translate(-197.818 -455.552)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_204_"
                                          d="M36.011,429.387a19.665,19.665,0,0,0,3.88,5.015,9.617,9.617,0,0,1,1.052-.8,22.866,22.866,0,0,1-2.532-5.376A19.377,19.377,0,0,0,36.011,429.387Z"
                                          transform="translate(-33.687 -400.666)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_203_"
                                          d="M40.651,80.531a19.948,19.948,0,0,0,2.312,1.077,22.409,22.409,0,0,1,2.649-5.261,10.529,10.529,0,0,1-.978-.67A19.673,19.673,0,0,0,40.651,80.531Z"
                                          transform="translate(-38.027 -70.874)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                    <path id="Path_202_"
                                          d="M1.707,320.746a21.281,21.281,0,0,1,2.629-1.257,26.561,26.561,0,0,1-.849-6.057H0a19.416,19.416,0,0,0,1.707,7.314Z"
                                          transform="translate(0 -293.283)" fill="#be3131" fillRule="evenodd"></path>
                                    <path id="Path_201_"
                                          d="M223.414,208.955a.685.685,0,0,0,.119-.6c-.152-.559-.349-1.152-.526-1.676a13.3,13.3,0,0,1-.489-1.656.7.7,0,0,1,1.187-.615,2.095,2.095,0,0,0,3.581-1.647c-.158-3.152-4.348-5.935-5.581-6.691-1.233.753-5.423,3.539-5.581,6.691a2.106,2.106,0,0,0,1.7,2.24,2.081,2.081,0,0,0,1.879-.592.7.7,0,0,1,1.187.615,13.464,13.464,0,0,1-.489,1.651c-.176.522-.374,1.112-.526,1.676a.681.681,0,0,0,.119.6.7.7,0,0,0,.559.279h2.3A.7.7,0,0,0,223.414,208.955Z"
                                          transform="translate(-202.167 -183.499)" fill="#be3131"
                                          fillRule="evenodd"></path>
                                </g>
                                <path id="Shape_104_"
                                      d="M161.3,150.828A10.474,10.474,0,1,0,150.828,161.3,10.474,10.474,0,0,0,161.3,150.828Zm-13.292,6.857a2.074,2.074,0,0,1-.36-1.811c.153-.566.343-1.137.516-1.651a3.566,3.566,0,0,1-1.457.041,3.491,3.491,0,0,1-2.856-3.685c.225-4.454,6.377-7.9,6.639-8.042a.694.694,0,0,1,.674,0c.262.144,6.415,3.588,6.639,8.042a3.485,3.485,0,0,1-2.858,3.685,3.561,3.561,0,0,1-1.458-.041c.173.514.364,1.086.517,1.651a2.095,2.095,0,0,1-2.024,2.635h-2.3A2.085,2.085,0,0,1,148.009,157.685Z"
                                      transform="translate(-131.294 -131.377)" fill="#be3131"></path>
                                <path id="Path_200_"
                                      d="M372.7,502.33a17.332,17.332,0,0,0-3.015-1.132c-.263.792-.542,1.556-.854,2.255a14.425,14.425,0,0,1-2.263,3.684A14.507,14.507,0,0,0,372.7,502.33Z"
                                      transform="translate(-342.905 -468.928)" fill="#be3131"
                                      fillRule="evenodd"></path>
                                <path id="Path_199_"
                                      d="M497.736,429.336a19.423,19.423,0,0,0-2.4-1.165,22.839,22.839,0,0,1-2.532,5.377,9.64,9.64,0,0,1,1.052.8A19.66,19.66,0,0,0,497.736,429.336Z"
                                      transform="translate(-460.994 -400.615)" fill="#be3131"
                                      fillRule="evenodd"></path>
                                <path id="Path_198_"
                                      d="M542.389,313.432H538.9a26.563,26.563,0,0,1-.849,6.059,21.167,21.167,0,0,1,2.629,1.257A19.409,19.409,0,0,0,542.389,313.432Z"
                                      transform="translate(-503.322 -293.283)" fill="#be3131"
                                      fillRule="evenodd"></path>
                                <path id="Path_197_"
                                      d="M444.253,529.291a18.151,18.151,0,0,1-2.5,2.723,19.611,19.611,0,0,0,3.282-2.144A8.3,8.3,0,0,0,444.253,529.291Z"
                                      transform="translate(-413.242 -495.208)" fill="#be3131"
                                      fillRule="evenodd"></path>
                                <path id="Path_196_"
                                      d="M537.937,169.918a21.36,21.36,0,0,1-2.545,1.179,26.426,26.426,0,0,1,1.021,6.688H539.9a19.424,19.424,0,0,0-1.963-7.867Z"
                                      transform="translate(-500.833 -159.032)" fill="#be3131"
                                      fillRule="evenodd"></path>
                                <path id="Path_195_"
                                      d="M378.6,454.9a11.855,11.855,0,0,1-1.861,1.025q.774.124,1.517.29C378.374,455.787,378.49,455.354,378.6,454.9Z"
                                      transform="translate(-352.417 -425.62)" fill="#be3131" fillRule="evenodd"></path>
                                <path id="Path_194_"
                                      d="M317.808,489.316c.279-.629.532-1.313.768-2.025a27.253,27.253,0,0,0-4.985-.6h-.2v7.569C314.99,493.877,316.549,492.154,317.808,489.316Z"
                                      transform="translate(-293.159 -455.36)" fill="#be3131" fillRule="evenodd"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
    const weeklyGain = () => {
        return (
            <svg id="jeton-de-casino" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                 viewBox="0 0 37.349 37.349" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path id="Path_6" data-name="Path 6"
                      d="M280.88,4.7A18.635,18.635,0,0,0,269.56,0V4.246A14.4,14.4,0,0,1,277.879,7.7Z"
                      transform="translate(-249.785)" fill="#be3131"></path>
                <path id="Path_7" data-name="Path 7"
                      d="M407.632,96.57h4.246a18.635,18.635,0,0,0-4.7-11.32l-3,3A14.4,14.4,0,0,1,407.632,96.57Z"
                      transform="translate(-374.529 -78.996)" fill="#be3131"></path>
                <path id="Path_8" data-name="Path 8"
                      d="M4.246,269.56H0a18.635,18.635,0,0,0,4.7,11.32l3-3A14.4,14.4,0,0,1,4.246,269.56Z"
                      transform="translate(0 -249.785)" fill="#be3131"></path>
                <path id="Path_9" data-name="Path 9"
                      d="M7.7,88.251l-3-3A18.635,18.635,0,0,0,0,96.57H4.246A14.4,14.4,0,0,1,7.7,88.251Z"
                      transform="translate(0 -78.996)" fill="#be3131"></path>
                <path id="Path_10" data-name="Path 10"
                      d="M96.57,4.246V0A18.635,18.635,0,0,0,85.25,4.7l3,3A14.4,14.4,0,0,1,96.57,4.246Z"
                      transform="translate(-78.996)" fill="#be3131"></path>
                <path id="Path_11" data-name="Path 11"
                      d="M85.25,407.181a18.635,18.635,0,0,0,11.32,4.7v-4.246a14.4,14.4,0,0,1-8.319-3.452Z"
                      transform="translate(-78.996 -374.529)" fill="#be3131"></path>
                <path id="Path_12" data-name="Path 12"
                      d="M269.56,407.632v4.246a18.635,18.635,0,0,0,11.32-4.7l-3-3A14.4,14.4,0,0,1,269.56,407.632Z"
                      transform="translate(-249.785 -374.529)" fill="#be3131"></path>
                <path id="Path_13" data-name="Path 13"
                      d="M404.18,277.879l3,3a18.635,18.635,0,0,0,4.7-11.32h-4.246A14.4,14.4,0,0,1,404.18,277.879Z"
                      transform="translate(-374.529 -249.785)" fill="#be3131"></path>
                <path id="Path_14" data-name="Path 14"
                      d="M111.849,99.579a12.269,12.269,0,1,0-12.269,12.269A12.283,12.283,0,0,0,111.849,99.579Zm-10.827,6.278h-.342v1.411a1.1,1.1,0,1,1-2.2,0v-1.411l-.5-.022a4.294,4.294,0,0,1-3.273-1.548,1.1,1.1,0,0,1,1.691-1.409,2.118,2.118,0,0,0,1.6.778h3.018a1.488,1.488,0,1,0,.011-2.977H98.138a3.689,3.689,0,1,1,.027-7.379h.314V91.89a1.1,1.1,0,0,1,2.2,0V93.3h.252a4.3,4.3,0,0,1,3.606,2.027,1.1,1.1,0,1,1-1.869,1.161,2.094,2.094,0,0,0-1.753-.968H98.149a1.47,1.47,0,0,0-1.5,1.469,1.49,1.49,0,0,0,1.488,1.488h2.883a3.689,3.689,0,0,1,0,7.379Z"
                      transform="translate(-80.905 -80.905)" fill="#be3131"></path>
            </svg>
        )
    }
    const cards = [{icon: playerIcon(), infoName: "Joueurs connectés", data: "1456122", symbol: "NB"},
        {icon: casinoIcon(), infoName: "Casino connectés", data: "1356"},
        {icon: weeklyGain(), infoName: "Gain de la semaine", data: "2.566", symbol: "€"}
    ]

    const infoCardWrapper = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "60%",
        justifyContent: "space-between",
        marginTop: "1%",
        marginBottom: "2%",
    }

    const wrapper = {
        flexGrow: "4",
        maxHeight: "70%",
        width: "100%",
    }
    const useCurrentPath = () => {
        const location = useLocation()
        //const [{ route }] = matchRoutes(routes, location)
        return location
    }

    let url = useCurrentPath();
    return (
        <Background footer={<MainFooter debug={true}/>}>
            <section className={"header-toolbar"}>
                <MenuTop/>
                <div style={infoCardWrapper}>
                    {
                        Object.values(cards).map(el => {
                            return (
                                <InfoCard {...el}/>
                            )
                        })
                    }
                </div>
            </section>
            <div role="separator" id="mat-divider"
                 className="mat-divider mat-divider-horizontal" aria-orientation="horizontal"></div>
            <div style={wrapper}>
            <div className="sub-views-wrapper">
                <div className="nav-wrapper">
                    <NavButton text="Jeux Disponible" clicked={subView === "available-games"? true: false} action={() => {
                        setSubView("available-games")
                        navigate("/available-games")
                    }}/>
                    <NavButton text="Jeux En Cours" clicked={subView === "live-games"? true: false} action={() => {
                        setSubView("live-games")
                        navigate("/live-games")
                    }}/>
                    <NavButton text="Historique" clicked={subView === "historical"? true: false}  action={() => {
                        setSubView("historical")
                        navigate("/historical")
                    }}/>
                </div>
                <Routes>
                    <Route path={"/"} element={<AvailableGames setPop={setPop} debug={true}/>}/>
                    <Route path={"/available-games"} element={<AvailableGames setPop={setPop} debug={true}/>}/>
                    <Route path={"/live-games"} element={<LiveGames setPop={setPop} debug={true}/>}/>
                    <Route path={"/historical"} element={<AvailableGames setPop={setPop} debug={true}/>}/>
                </Routes>
            </div>
            </div>

        </Background>
    )
}
export default MainView;