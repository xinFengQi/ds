import { Component, h, Element, Prop } from '@stencil/core';

export interface dsCardData {
  title: string;
  content: string;
  subtitle?: boolean;
  btu?: {
    name: string,
    onClick: (...args) => void;
  }[];
}



/**
 * 展示卡片的数据
 */
@Component({
  tag: 'dash-card',
  styleUrl: 'dash-card.css',
  shadow: false,
})
export class DashCard {

  @Element() el: HTMLDivElement;

  /**卡片数据数组 */
  @Prop() cardData: dsCardData[] = [
    {
      title: '第一季',
      content: '第一季的东西，第一季的东西，第一季的东西，第一季的东西，第一季的东西，第一季的东西，第一季的东西，第一季的东西，'
    },
    {
      title: '第二季',
      content: '第一季的东西，第一季的东西，第一季的东西，第一季的东西，'
    },
  ];

  render() {
    return (
      <div class="dash_card_main">
        {
          this.cardData ? this.cardData.map(card => {
            return (
              <div class="card dash_card_" style={{ width: '18rem' }}>
                <div class="card-body">
                  <h5 class="card-title">{card.title}</h5>
                  {card.subtitle ? <h6 class="card-subtitle mb-2 text-muted">{card.subtitle}</h6> : null}
                  <p class="card-text">{card.content}</p>
                  {
                    card.btu ? card.btu.map(bt => {
                      return <a href="#" onClick={e => bt.onClick(e, card)} class="card-link">{bt.name}</a>
                    }) : null
                  }
                </div>
              </div>
            );
          }) : null
        }

      </div >
    );
  }

}
