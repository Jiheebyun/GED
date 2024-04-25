


import React from "react";
import styled from "styled-components";



const SecondBackgroundWrapper = styled.div`
    width: 100%;
    margin: 80px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ImageContainer = styled.div`
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px; /* 필요에 따라 조정할 수 있는 간격 */
    /* max, min width 랑 height */
    #img-container{
        flex: 1;
    }
    #text-content-container{
        height: 200px;
    }
    img{
        max-width: 100%; 
        max-height: 100%;
        border-radius: 10px;
    }
    div > span{
        font-size: 20px;
        color: white;
    }
`;


export const SecondeBackgroundContent = () =>{
    return (
        <>
            <SecondBackgroundWrapper>
                <ImageContainer>
                    <div className="img-container">
                        <img src="/img/CharleBot1.png" alt="charle-bot2"></img>
                    </div>
                    <div>
                        <span> CharLe bot2</span>
                    </div>
                </ImageContainer>
                <ImageContainer>
                    <div className="img-container">
                        <img src="/img/CharleBot1.png" alt="charle-bot2"></img>
                    </div>
                    <div className="text-content-container">
                        <span> CharLe bot2</span>
                    </div>
                </ImageContainer>

            </SecondBackgroundWrapper>
        
        </>
    )
};