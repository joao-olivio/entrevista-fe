const { describe, it, post } = require('parrot-friendly');
const { getMock } = require('./mocks');

const scenarios = {} 

/*describe('Shade Selector', () => {
  it('moves to swatch with 3 choices', () => {
    post('/api/color-match/question')
      .response({
        success: true,
        errorMessage: null,
        question: {
          ...JSON.parse(getMock('color-match/swatches-with-3.json'))
        }
      });
  });

  it('moves to swatch with 5 choices', () => {
    post('/api/color-match/question')
      .response({
        success: true,
        errorMessage: null,
        question: {
          ...JSON.parse(getMock('color-match/swatches-with-5.json'))
        }
      });
  });

  it('moves to swatch with carousel', () => {
    post('/api/color-match/question')
      .response({
        success: true,
        errorMessage: null,
        question: {
          ...JSON.parse(getMock('color-match/swatches-carousel.json'))
        }
      });
  });

  it('moves to single select subquestion', () => {
    post('/api/color-match/question')
      .response({
        success: true,
        errorMessage: null,
        question: JSON.parse(getMock('color-match/subquestion-2.json'))
      });
  });

  it('moves to multiselect subquestion', () => {
    post('/api/color-match/question')
      .response({
        success: true,
        errorMessage: null,
        question: JSON.parse(getMock('color-match/subquestion-1.json'))
      });
  });

  it('moves to single select vertical', () => {
    post('/api/color-match/question')
      .response({
        success: true,
        errorMessage: null,
        question: JSON.parse(getMock('color-match/single-select-vertical.json'))
      });
  });

  it('move to expired session', () => {
    post('/api/color-match/question')
      .response({
        success: false,
        errorMessage: 'Session has expired',
        question: JSON.parse(getMock('color-match/single-select-vertical.json'))
      });
  });

  it('move to results step', () => {
    post('/api/color-match/question')
      .response({
        success: true,
        errorMessage: null,
        ...JSON.parse(getMock('color-match/results.json'))
      });
  });

  it('move to no results step', () => {
    post('/api/color-match/question')
      .response({
        success: true,
        errorMessage: null,
        ...JSON.parse(getMock('color-match/no-results.json'))
      });
  });
});

*/

module.exports = scenarios;
