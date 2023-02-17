import React, { useEffect, useState, useRef } from 'react'
// import styled from "styled-components";
import styled from "styled-components/macro";
import Marquee from "react-fast-marquee";
import Header, { Footer, Navbar, MinDivBorder } from "../partials/Theme"

function PersonalizedJourney() {
    const [products, setProducts] = useState([]);
    const recipesRef = useRef(null)

    const getRecipes = () => {
        fetch("/testData/recipes.json")
        .then(res => res.json())
        .then(data => {
            setProducts(data.data);
        })
    }
    useEffect(() => {
        getRecipes();
      }, []);

    const handleScroll = (e) =>{
        let element = e.target
        const maxScrollLeft = element.scrollWidth - element.clientWidth

        // disable right arrw
        if(Math.round(e.target.scrollLeft) === Math.round(maxScrollLeft)){
            let rightArrow = document.getElementById('keep-looking-right')
            rightArrow.classList.remove('arrow-primary')
            rightArrow.classList.add('arrow-primary-light')
        }
        // unable left arrow
        else if(e.target.scrollLeft > 100){
            let leftArrow = document.getElementById('keep-looking-left')
            leftArrow.classList.remove('arrow-primary-light')
            leftArrow.classList.add('arrow-primary')
        }
        else{
            let rightArrow = document.getElementById('keep-looking-right')
            let leftArrow = document.getElementById('keep-looking-left')
            rightArrow.classList.remove('arrow-primary-light')
            rightArrow.classList.add('arrow-primary')

            leftArrow.classList.remove('arrow-primary')
            leftArrow.classList.add('arrow-primary-light')
        }
    }

    const scroll = (scrollOffset) => {
        if (recipesRef?.current?.scrollLeft !== undefined) {
            recipesRef.current.scrollLeft += scrollOffset;
        }
      };

  return (
    <div>
        <Navbar />
        <Header />

    {/* MinHeight */}
        <div className="MinDiv ">
            {/* sectoin One */}
            <PersonalizedJourneyBox style={{height: '54px'}} />
            <MinDivBorder style={{marginLeft: '0'}} />

            {/* section Two */}

            <PersonalizedJourneyBox>
                <div className="">
                    <div className="m-0">
                        <div className="col-12 col-xxl-12 p-0">
                            <div className="d-flex align-items-start h-100">
                                <SectionOneTextBox className="h-100">
                                    <PersonalizedJourneySectionTwoTitleBox>
                                        <div className="d-flex align-items-center h-100">
                                            <PersonilesJourneyArrowBackIcon/>
                                            <PersonalizedJourneySectionTwoTitle className="minDiv-text-page">
                                                Blogs
                                            </PersonalizedJourneySectionTwoTitle>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <PersonilesJourneyYellowIcon className="d-flex justify-content-center align-items-center">
                                                <CheckoutRecipeLable>
                                                    <CheckoutRecipeLableText className="d-block">Check out</CheckoutRecipeLableText>
                                                    <CheckoutRecipeLableText className="d-block">Recipes!</CheckoutRecipeLableText>
                                                </CheckoutRecipeLable>
                                            </PersonilesJourneyYellowIcon>
                                        </div>
                                    </PersonalizedJourneySectionTwoTitleBox>

                                    <MinDivBorder style={{marginLeft: '0'}} />

                                    <PersJourneySectionTwoContentBox>
                                        <div className="col-5 col-xxl-5 p-0">
                                            <PersSectionTwoImage1 />
                                        </div>
                                        <div className="p-0 d-flex col-7 col-xxl-7" style={{alignItems : 'center'}}>
                                            <SectionTwoTextContainer className='col-12'>
                                                <SectionTwoTitile className='col-12 text-uppercase'>
                                                    MastserChef MOM
                                                </SectionTwoTitile>
                                                <SectionTwoTetx className='col-11'>
                                                    In a small bowl, combine yogurt, lemon juice, garlic,
                                                    remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                                    Velit officia consequat duis enim velit mollit. 
                                                    Exercitation veniam consequat sunt nostrud amet.
                                                </SectionTwoTetx>
                                                <ReadNowButton className='col-4'>
                                                    <ReadNowText>
                                                        Read now
                                                    </ReadNowText>
                                                </ReadNowButton>
                                            </SectionTwoTextContainer>
                                        </div>
                                    </PersJourneySectionTwoContentBox>
                                    <MinDivBorder style={{marginLeft: '0'}} />
                                    {/* Keep Sliding */}
                                    <div className='d-flex justify-content-end mx-4'>
                                        <KeepSliding>KEEP SLIDING</KeepSliding>
                                        <KeepSliding><i className="arrow-primary right" ></i></KeepSliding>
                                    </div>
                                </SectionOneTextBox> 
                            </div>
                        </div>
                    </div>
                </div>
            </PersonalizedJourneyBox>
        </div>

        {/* MinHeight */}
        <div className="MinDiv ">
            {/* sectoin One */}
            {/* <PersonalizedJourneyBox style={{height: '54px'}} /> */}

            {/* section Two */}

            <PersonalizedJourneyBox>
                <div className="">
                    <div className="m-0">
                        <div className="col-12 col-xxl-12 p-0">
                            <MinDivBorder style={{marginLeft: '0'}} />
                            <div className="d-flex align-items-start h-100">
                                <SectionOneTextBox className="h-100">
                                    <PersonalizedJourneySectionTwoTitleBox>
                                        <div className="d-flex align-items-center h-100">
                                            <PersonalizedJourneySectionTwoTitle className="minDiv-text-page">
                                                Feature Sightings
                                            </PersonalizedJourneySectionTwoTitle>
                                        </div>
                                    </PersonalizedJourneySectionTwoTitleBox>
                                    <MinDivBorder style={{marginLeft: '70px'}} />


                                    <PersJourneySectionTwoContentBox>
                                        <div className="col-5 col-xxl-5 p-0">
                                            <PersSectionThreeImage1 />
                                        </div>
                                        <div className="p-0 d-flex col-7 col-xxl-7" style={{alignItems : 'center'}}>
                                            <SectionTwoTextContainer className='col-12'>
                                                <SectionTwoTitile className='col-12' style={{ color : '#2C488E'}}>
                                                    Organic. Fresh. Frozen. 
                                                </SectionTwoTitile>
                                                <SectionTwoTetx className='col-11'>
                                                    In a small bowl, combine yogurt, lemon juice, garlic,
                                                    remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                                    Velit officia consequat duis enim velit mollit. 
                                                    Exercitation veniam consequat sunt nostrud amet.
                                                </SectionTwoTetx>
                                                <ReadNowButton className='col-4'>
                                                    <ReadNowText>
                                                        Read now
                                                    </ReadNowText>
                                                </ReadNowButton>
                                            </SectionTwoTextContainer>
                                        </div>
                                    </PersJourneySectionTwoContentBox>
                                    
                                </SectionOneTextBox> 
                            </div>
                        </div>
                    </div>
                </div>
                <MinDivBorder style={{marginLeft: '0'}} />
            </PersonalizedJourneyBox>
        </div>

        <div className='MinDiv'>
            <PersonalizedJourneyBox>
                <PersJourneySectionFourContentBox>
                    <div className="col-5 col-xxl-5 p-0">
                        <PersSectionFourImage1 />
                    </div>
                    <div className="p-0 d-flex col-7 col-xxl-7" style={{alignItems : 'center'}}>
                        <SectionThreeTextContainer className='col-12'>
                            <SectionTwoTitile className='col-12 text-uppercase' style={{ color : '#2C488E'}}>
                                PASSIONATE ABOUT BAKING
                            </SectionTwoTitile>
                            <SectionTwoTetx className='col-11'>
                                In a small bowl, combine yogurt, lemon juice, garlic,
                                remaining Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                Velit officia consequat duis enim velit mollit. 
                                Exercitation veniam consequat sunt nostrud amet.
                            </SectionTwoTetx>
                            <ReadNowButton className='col-4'>
                                <ReadNowText>
                                    Read now
                                </ReadNowText>
                            </ReadNowButton>
                        </SectionThreeTextContainer>
                    </div>
                </PersJourneySectionFourContentBox>
            </PersonalizedJourneyBox>
        </div>

        {/* Recipes for Your taste buds */}
        <div className="MinDiv ">
            <PersonalizedJourneyBox>
                <div className="m-0">
                    <MinDivBorder style={{marginLeft: '0'}} />
                    <div className="d-flex align-items-start h-100">
                        <SectionOneTextBox className="h-100">
                            <PersonalizedJourneySectionTwoTitleBox>
                                <div className="d-flex align-items-center h-100">
                                    <PersonalizedJourneySectionTwoTitle className="minDiv-text-page">
                                        Recipes for Your taste buds
                                    </PersonalizedJourneySectionTwoTitle>
                                </div>
                            </PersonalizedJourneySectionTwoTitleBox>
                            <MinDivBorder style={{marginLeft: '70px'}} />
                        </SectionOneTextBox> 
                    </ div>
                </ div>
                                                       
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center">         
                        <div className="slider">
                            <div className="slides" id="recipessection" onScroll={handleScroll} ref={recipesRef}>
                                    {
                                        products.map(p => (
                                            (
                                                <SlideRectangle key={p.id.toString()}>
                                                    <img alt="product" className="personalizedjourney-slides-image" src={p.attributes.path}></img>
                                                    <SlideText>{p.attributes.name}</SlideText>
                                                </SlideRectangle>
                                            )
                                        ))
                                    }
                                <MinDivBorder style={{marginLeft: '0'}} />
                            </div>
                        </div>
                    </div>                   
                    </div>

                {/* keep looking */}
                <MinDivBorder style={{marginLeft: '0'}} />
                <div className='d-flex justify-content-end mx-4'>
                    <KeepLooking onClick={()=>{scroll(-300)}}><i id="keep-looking-left" className=" left arrow-primary-light" ></i></KeepLooking>
                    <KeepLooking>KEEP LOOKING</KeepLooking>
                    <KeepLooking onClick={()=>{scroll(300)}}><i id="keep-looking-right" className="arrow-primary right" ></i></KeepLooking>
                </div>
            </PersonalizedJourneyBox>
        </div>
        {/* Recipes for Your taste buds */}

        {/* FAQ's */}
        <div className="MinDiv ">
            <PersonalizedJourneyBox>
                <div className="">
                    <div className="m-0">
                        <div className="col-12 col-xxl-12 p-0">
                            <MinDivBorder style={{marginLeft: '0'}} />
                            <div className="d-flex align-items-start h-100">
                                <SectionOneTextBox className="h-100">
                                    <PersonalizedJourneySectionTwoTitleBox>
                                        <div className="d-flex align-items-center h-100">
                                            <PersonalizedJourneySectionTwoTitle className="minDiv-text-page">
                                                FAQ'S
                                            </PersonalizedJourneySectionTwoTitle>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <ReadRecipes className="d-flex justify-content-center align-items-center">
                                                <ReadRecipesLable>
                                                    <CheckoutRecipeLableText className="d-block">Read</CheckoutRecipeLableText>
                                                    <CheckoutRecipeLableText className="d-block">recipes</CheckoutRecipeLableText>
                                                </ReadRecipesLable>
                                            </ReadRecipes>
                                        </div>
                                    </PersonalizedJourneySectionTwoTitleBox>
                                    <MinDivBorder style={{marginLeft: '70px'}} />


                                    <PersJourneySectionTwoContentBox>
                                        <div className="p-0 d-flex col-11 " style={{alignItems : 'center'}}>
                                            <SectionTwoTextContainer className='col-12' style={{marginTop : '58px'}}>
                                                <div className='col-12 d-flex' style={{fontSize : '32px' , fontWeight : '600' , marginBottom : '25px' , paddingTop : '25px'}}>
                                                    <span style={{fontSize : '24px' , fontWeight : '700' }}>01</span>
                                                    <div className='col-11 d-flex justify-content-between' style={{marginLeft : '30px' , borderBottom : '1px solid #A9A9A9' , paddingBottom : '10px'}}>
                                                        <span style={{marginBottom : '10px'}}>Do I have to sign up to buy?</span>
                                                        <span  style={{textAlign : 'right'}}><RightArrowGray className='right'></RightArrowGray></span>
                                                    </div>
                                                </div>
                                                <div className='col-12 d-flex' style={{fontSize : '32px' , fontWeight : '600' , marginBottom : '25px' , paddingTop : '25px'}}>
                                                    <span style={{fontSize : '24px' , fontWeight : '700'}}>02</span>
                                                    <div className='col-11 d-flex justify-content-between' style={{marginLeft : '30px' , borderBottom : '1px solid #A9A9A9' , paddingBottom : '10px'}}>
                                                        <span style={{marginBottom : '10px'}}>Why only Frozen?</span>
                                                        <span  style={{textAlign : 'right'}}><RightArrowGray className='right'></RightArrowGray></span>
                                                    </div>
                                                </div>
                                                <div className='col-12 d-flex' style={{fontSize : '32px' , fontWeight : '600' , marginBottom : '25px' , paddingTop : '25px'}}>
                                                    <span style={{fontSize : '24px' , fontWeight : '700'}}>03</span>
                                                    <div className='col-11 d-flex justify-content-between' style={{marginLeft : '30px' , borderBottom : '1px solid #A9A9A9' , paddingBottom : '10px'}}>
                                                        <span style={{marginBottom : '10px' , color : '#8F8F8F'}}>Is it really fresh?</span>
                                                        <span  style={{textAlign : 'right'}}><RightArrowGray className='right'></RightArrowGray></span>
                                                    </div>
                                                </div>
                                                <div className='col-12 d-flex' style={{fontSize : '32px' , fontWeight : '600' , marginBottom : '25px' , paddingTop : '25px'}}>
                                                    <span style={{fontSize : '24px' , fontWeight : '700'}}>04</span>
                                                    <div className='col-11 d-flex justify-content-between' style={{marginLeft : '30px' , borderBottom : '1px solid #A9A9A9' , paddingBottom : '10px'}}>
                                                        <span style={{marginBottom : '10px'}}>Any membership/loyalty programs?</span>
                                                        <span  style={{textAlign : 'right'}}><RightArrowGray className='right'></RightArrowGray></span>
                                                    </div>
                                                </div>
                                                <div className='col-12 d-flex' style={{fontSize : '32px' , fontWeight : '600' , marginBottom : '25px' , paddingTop : '25px'}}>
                                                    <span style={{fontSize : '24px' , fontWeight : '700'}}>05</span>
                                                    <div className='col-11 d-flex justify-content-between' style={{marginLeft : '30px' , borderBottom : '1px solid #A9A9A9'}}>
                                                        <span style={{marginBottom : '10px'}}>I’m looking for bulk orders</span>
                                                        <span  style={{textAlign : 'right'}}><RightArrowGray className='right'></RightArrowGray></span>
                                                    </div>
                                                </div>
                                            </SectionTwoTextContainer>
                                        </div>
                                    </PersJourneySectionTwoContentBox>
                                    
                                </SectionOneTextBox> 
                            </div>
                        </div>
                    </div>
                </div>
            </PersonalizedJourneyBox>

            <SectionAboutMarquee>
                <Marquee style={{height: '43px', overflow: 'hidden'}} loop={0} speed={50} gradientColor={'none'}>
                    {[...Array(10).keys()].map
                        ((x, index, arr) => 
                            (
                                <AboutMarquee key={x}> 
                                    <span>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        Join us now! {index != (arr.length - 1) && [...Array(10)].map((i, i_index) => (<span key={i_index}>&nbsp;</span>))}
                                    </span>
                                </AboutMarquee>
                            )
                        )
                    }
                </Marquee>
            </SectionAboutMarquee>
        </div>

        <div className='left-border' style={{height: '22px' }} />

        {/* FAQ's */}
        
        <Footer mindiv="full" leftSideBorder={true} />
    </div>
  )
}

export default PersonalizedJourney

const light_theme_border_color = '#A9A9A9';

const PersonalizedJourneyBox = styled.div`
    margin-left: 70px;
    border-left: 1px solid ${light_theme_border_color};
`

const SectionTwoTextBox = styled.div`
    // margin-top: 40px; 
    // margin-bottom: 50px; 
`;

const SectionOneTextBox = styled(SectionTwoTextBox)`
    margin-left: -70px;
    width: calc(100% + 70px);

    @media (min-width: 1400px)
    {
        // padding-right: 20px;
    }
`;

const PersonalizedJourneySectionTwoTitleBox = styled.div`
    padding-left: 70px;
    padding-right: 40px;
    height: 96px;
`;

const PersJourneySectionTwoContentBox = styled.div`
    padding-left: 70px;
    display : flex
`;

const PersonalizedJourneySectionTwoTitle = styled.div`
    color: #111111;
    font-size: 32px;
    font-weight: 700;
    font-family: Poppins Bold;
    z-index: 1;
    margin-left : 3.5rem
`;

const PersonilesJourneyArrowBackIcon = styled.div`
    background: url(svgs/arrow_back.svg);
    background-size: 30px 30px;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    
    border: 1px solid black;
    border-radius: 50%;
    height: 50px;
    width: 50px;

    margin-left: -60px;
`;


const PersonilesJourneyYellowIcon = styled.div`
    position: absolute;
    // background-color: #F5A130;
    background-image: url('/svgs/Figure_12.svg');
    background-size: cover;
    background-repeat: no-repeat;
    // border-radius: 50%;
    height: 96px;
    width: 96px;
    margin-top: -70px;
    z-index: 10
`;

const CheckpoutRecipeText = styled.div`
font-family: Poppins Bold;
font-weight: 700;
text-align: center;
max-width: 130px;
white-space: normal;
margin-top: -10px;
`;

const CheckpoutRecipeTextProducts = styled(CheckpoutRecipeText)`
font-size: 12px;
color: white;

@media (min-width: 576px)
{
    font-size: 20px;
}
`;

const CheckoutRecipeLable = styled(CheckpoutRecipeTextProducts)`
    margin-top : 0px;
    font-size : 16px;
    transform : rotate(30deg);
`
const CheckoutRecipeLableText = styled.span`
    line-height : 20px
`
const PersJourneyImage = styled.div`
    position: relative;
    width: 100%;
    background-repeat: no-repeat;
`;

const PersSectionTwoImage1 = styled(PersJourneyImage)`
    min-height: calc(100vw / 1.3);
    background-size: contain;
    background-position: bottom;
    background-image: url('images/Pers.png');

    @media (min-width: 768px)
    {
        min-height: 500px;
        background-size: cover;
        background-position: center top;
    }
`;

const SectionTwoTextContainer = styled.div`
    // margin-left : 3rem;
    padding-left : 70px;
    padding-right : 40px;
`

const SectionTwoTitile = styled.div`
    font-size : 32px;
    line-height: 48px;
    font-weight: 600;
    // height: 48px;
`
const SectionTwoTetx =styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #8D8D8D;
    margin-bottom : 2rem
`

const ReadNowButton = styled.div`
    border : 1px solid #111111;
    text-align : center;
    padding : 0.75rem 0;
    border-radius : 5px;
    max-width : 300px;
    min-width : 150px;
`
const ReadNowText = styled.span`
    font-weight: 600;
    font-size: 20px;
    color : #111111;
`


//section three
const PersSectionThreeImage1 = styled(PersSectionTwoImage1)`
background-image: url('images/image 20.png');
`
const SectionThreeTextContainer = styled(SectionTwoTextContainer)`
    padding-left : 0px;
    padding-right : 70px;
`

const KeepSliding = styled.div`
    padding : 15px ;
    color : #F4A73F; 
    font-weight : 800;
    font-size : 24px ; 
    letter-spacing : 0.05em
`

//section three

// section four
const PersJourneySectionFourContentBox = styled(PersJourneySectionTwoContentBox)`
flex-direction : row-reverse ;
`

const PersSectionFourImage1 = styled(PersSectionTwoImage1)`
background-image: url('images/image 20-1.png');
`
// section four

// seciton six

const SecSixImage1 = styled.img`
    width : 80%;
    height : 300px;

    @media (min-width: 2400px)
    {
        width : 50%;
    }
`

const SecSixImage2 = styled(SecSixImage1)`
    height : 300px

    @media (min-width: 2400px)
    {
        width : 50% !important;
    }
`

const SecSixImage3 = styled(SecSixImage1)`
    height : 300px

    @media (min-width: 2400px)
    {
        width : 50%;
    }
`

const KeepLooking = styled(KeepSliding)``
// seciton six

// seciton seven

const ReadRecipes = styled(PersonilesJourneyYellowIcon)`
    background-image: url('/svgs/bg-green-round.svg');
    width : 110px;
    height : 110px;
    margin-top : -40px;
    margin-right : -40px
`
const ReadRecipesLable = styled(CheckoutRecipeLable)`
    transform : rotate(15deg);
`
// seciton seven

const SectionAboutMarquee = styled.div`
    background-color: #F9A83B;
`;

const AboutMarquee = styled.div`
    margin: 8px 0;
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    font-family: Poppins SemiBold;
`;

const RightArrowGray = styled.i`
    border: solid  #22272F;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
`
const SlideRectangle = styled.div`
    background: #ffffff;
    height: 100%;
    border-right: 1px solid #A9A9A9;
`;

const SlideText = styled.p`
    font-weight: 600;
    color: #000000;
    padding: 10px;
    font-size: 16px;
    border-top: 1px solid #A9A9A9;
    margin-bottom: 0;

    @media (min-width: 768px)
    {
        font-size: 20px;
    }
`;
