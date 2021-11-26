import React from 'react'
import brand1 from '../static/images/site_logo.jpg';
import tokenLogo from '../static/images/token_logo.jpg';
import binance from '../static/images/binance.png';
import roundTokenLogo from '../static/images/round_token_logo.png';
import tokenName from '../static/images/token_name.png';
import network from '../static/images/network.png';
import totalSupply from '../static/images/total_supply.png';
import tokenAddress from '../static/images/token_address.png';
import burn from '../static/images/burn.png';
import tokenFeatureBackground from '../static/images/background2.png';
import PolarChart from './PolarChart';
import * as Scroll from 'react-scroll';

import {BiCheck} from 'react-icons/bi';
import CountDownTimer from './CountDownTimer';
const Slide = () => {
  let Element = Scroll.Element;

  const teamMembers = [{
    thumbnail: '/assets/imgs/team/robert.png',
    name: 'Aaron Oshields',
    role: 'CEO & Co-founder'
  },
  {
    thumbnail: '/assets/imgs/team/robert.png',
    name: 'Serf',
    role: 'CTO & Co-founder'
  },
  {
    thumbnail: '/assets/imgs/team/robert.png',
    name: 'Robert Paek',
    role: 'Project lead developer'
  }];

  const roadmaps = [{
    step: 'Q1-Q3',
    year: '2021',
    description: `Team Formation
    Project Documentation
    Secure Funding
    Partnership with SSANDKey
    Partnership with JoinBrands`,
    completed: true,
  },{
    step: 'Q4',
    year: '2021',
    description: `Team Formation
    Project Documentation
    Secure Funding
    Partnership with SSANDKey
    Partnership with JoinBrands`,
    completed: true,
  },{
    step: 'Q5',
    year: '2022',
    description: `Team Formation
    Project Documentation
    Secure Funding
    Partnership with SSANDKey
    Partnership with JoinBrands`,
    completed: false,
  },{
    step: 'Q6',
    year: '2022',
    description: `Team Formation
    Project Documentation
    Secure Funding
    Partnership with SSANDKey
    Partnership with JoinBrands`,
    completed: false,
  }]
  return (
    <div className="content-layout pt-header">
      <Element name="home">
        <section className='l-slide'>
          <div className="l-slid-text-layout">
            <h2 className="l-slid-text-layout-title">{'SupremeSAND'}</h2>
            <label htmlFor="" className="l-slid-text-layout-subTitle">{'Earn crypto rewards'}</label>
            <p className="l-slid-text-layout-description">{'SSAND Network is a platform that allows eCommerce brands to offer crypto rewards to customers, influencers, content creators, and brand ambassadors.'}</p>
          </div>
          <div className="w-flex1 l-slid-img-layout">
            <img src={brand1} alt="" className="l-slid-img-layout-brand" />
          </div>
        </section>
      </Element>
      <section className="timer-section">
        <CountDownTimer />
      </section>
      <Element name="about">
        <section className="l-slide">
        <div className="w-50 l-slid-img-layout">
          <img src={tokenLogo} alt="" className="l-slid-img-layout-logo" />
        </div>
        <div className="w-flex1 l-slid-text-layout" style={{marginBottom: 0}}>
          <h2 className="l-slid-text-layout-title">{'How it Works'}</h2>
          <p className="l-slid-text-layout-description">{'For every purchase, social post, user-generated content, etc., a reward is given to the user in the form of a $SSAND (Binance Smart Network).'}</p>
          <label htmlFor="" className="l-slid-text-layout-subTitle">{'Brands'}</label>
          <p className="l-slid-text-layout-description">{'Offer crypto rewards to their customers, brand ambassadors, and content creators. Brands decide the value of the rewards and provide liquidity.'}</p>
          <label htmlFor="" className="l-slid-text-layout-subTitle">{'Customers / Creators / Influencers'}</label>
          <p className="l-slid-text-layout-description">{'Earn crypto rewards each time you buy a product, post to social media, or create content for the brand.'}</p>
        </div>
      </section>
      </Element>
      <Element name="tokenomics">
        <section className="tokenomics-section">
          <div className="network-layout">
            <label htmlFor="" className="network-label">{'BSC'}</label>
            <img src={binance} alt="" className="network-image" />
          </div>
          <div className="w-flex1 tokenomics-layout">
            <div className="tokenomics-term">
              <img src={roundTokenLogo} alt="" className="tokenomics-term-thumbnail" />
              <span className="tokenomics-term-title">{'Token Symbol'}</span>
              <span className="tokenomics-detail">{'$SSAND'}</span>
            </div>
            <div className="tokenomics-term">
              <img src={tokenName} alt="" className="tokenomics-term-thumbnail" />
              <span className="tokenomics-term-title">{'Token Name'}</span>
              <span className="tokenomics-detail">{'SupremeSAND'}</span>
            </div>
            <div className="tokenomics-term">
              <img src={network} alt="" className="tokenomics-term-thumbnail" />
              <span className="tokenomics-term-title">{'Network'}</span>
              <span className="tokenomics-detail">{'Binance Smart Chain Network'}</span>
            </div>
            <div className="tokenomics-term">
              <img src={totalSupply} alt="" className="tokenomics-term-thumbnail" />
              <span className="tokenomics-term-title">{'Total Supply'}</span>
              <span className="tokenomics-detail">{'1,000,000,000,000,000 Tokens'}</span>
            </div>
            <div className="tokenomics-term">
              <img src={tokenAddress} alt="" className="tokenomics-term-thumbnail" />
              <span className="tokenomics-term-title">{'Token Address'}</span>
              <span className="tokenomics-detail">{'https://bscscan.com/token/0x7ce1f02474533faed697cd8c683ea2468bdd338d'}</span>
            </div>
            <div className="tokenomics-term">
              <img src={burn} alt="" className="tokenomics-term-thumbnail" />
              <span className="tokenomics-term-title">{'Burn'}</span>
              <span className="tokenomics-detail">{'Automatic burn when there is an odd number of tokens per reflection distribution, the remaining tokens will be burned.'}</span>
            </div>
          </div>

        </section>
        <section>
          <div className="token-features">
            <h4 className="token-features-title">{'Token Features'}</h4>
            <div className="w-100 token-features-content">
              <div className="w-20">
                <span className="token-features-percent">
                  {'4%'}
                </span>
                <span className="token-features-description-colored">Automatic Liquidity Pool</span>
                <span className="token-features-description-nocolored">will be added to the Liquidity Pool</span>
              </div>
              <div className="w-20">
                <span className="token-features-percent">
                  {'4%'}
                </span>
                <span className="token-features-description-colored">Automatic reflection</span>
                <span className="token-features-description-nocolored">will be distributed to token holders</span>
              </div>
              <div className="w-20">
                <span className="token-features-percent">
                  {'4%'}
                </span>
                <span className="token-features-description-colored">Automatic Buy Back, Marketing</span>
                <span className="token-features-description-nocolored">Token will be bought back & burn</span>
              </div>
              <div className="w-flex1 total-fee">
                <img src={tokenFeatureBackground} alt="" className="background" />
                <span className="token-features-percent">
                  {'12% TAX'}
                </span>
                <span className="token-features-description-nocolored">per transaction (Buy/Sell Transfer)</span>
              </div> 
            </div>
          </div>
        </section>
        <section className="distribution-section">
        <div className="distribution-features">
          <div className="chart-wrapper">
            <PolarChart></PolarChart>
          </div>

          <div className="description-layout">
            <h3 className="description-layout-title">Distribution</h3>
            <div>
              <div className="distribution-item">
                <label htmlFor="" className="distribution-value">
                  30%
                </label>
                <span className="distribution-description" style={{color: 'var(--liquidity-pool)'}}>
                Liquidity Pool
                </span>
                <span className="percentage" ></span>
              </div>
              <div className="distribution-item">
                <label htmlFor="" className="distribution-value">
                  10%
                </label>
                <span className="distribution-description" style={{color: 'var(--development)'}}>
                  Development
                </span>
                <span className="percentage"></span>
              </div>
              <div className="distribution-item">
                <label htmlFor="" className="distribution-value">
                  10%
                </label>
                <span className="distribution-description" style={{color: 'var(--partnerships)'}}>
                Partnerships
                </span>
                <span className="percentage"></span>
              </div>
              <div className="distribution-item">
                <label htmlFor="" className="distribution-value" style={{color: 'var(--presale)'}}>
                  30%
                </label>
                <span className="distribution-description">
                Presale
                </span>
                <span className="percentage"></span>
              </div>
              <div className="distribution-item">
                <label htmlFor="" className="distribution-value">
                  10%
                </label>
                <span className="distribution-description" style={{color: 'var(--marketing)'}}>
                Marketing
                </span>
                <span className="percentage"></span>
              </div>
          
            </div>
          </div>
        </div>
      </section>
      </Element>
      <Element name="team">
        <section className="team-section">
        <h3 className="team-title">Team</h3>
        <div className="team-members">
          {
            teamMembers.map((member, index) => (
              <div className="member-item">
                <img src={member.thumbnail} alt="" className="thumbnail" />
                <span className="name">{member.name}</span>
                <span className="role">{member.role}</span>
              </div>
            ))
          }
        </div>
      </section>
      </Element>
      <Element name="roadmap">
        <section className="roadmap-section">
        <h3 className="title">Roadmap</h3>
        <div className="roadmap-layout">
          {
            roadmaps.map((roadmap, index) => (
              <div className={"roadmap-item " + ((index % 2 === 0) ? '' : ' reverse')}>
                <div className="roadmap-content">
                  <div>
                    <span className="step">{roadmap.step}</span>
                    <span className="year">{roadmap.year}</span>
                  </div>
                  <div className="description">
                    {roadmap.description}
                  </div>
                </div>
                <div className="completed-icon" style={{visibility: roadmap.completed ? 'visible' : 'hidden'}}>
                  <BiCheck size={30} color={'white'} />
                </div>
              </div>
            ))
          }
        </div>
      </section>
      </Element>
    </div>
  )
}

export default Slide
