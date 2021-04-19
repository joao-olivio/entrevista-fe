/* eslint-disable */
import { backgroundDirective, getBackground } from './background'

describe('directive:background', () => {
  describe('getBackground() function',() => {
    it('should return the correct background image', () => {
      const mockBackgrounds = {
        0: 'image1',
        500: 'image2',
        1000: 'image3',
      }

      expect(getBackground(mockBackgrounds, 10)).toBe('image1');
      expect(getBackground(mockBackgrounds, 501)).toBe('image2');
      expect(getBackground(mockBackgrounds, 999)).toBe('image2');
      expect(getBackground(mockBackgrounds, 1000)).toBe('image3');
    })
  })
  describe('the directive', () => {
    it('should have a name', () => {
      expect(typeof backgroundDirective.name).toBe('string');
    })
    it('should have a bind function', () => {
      expect(typeof backgroundDirective.bind).toBe('function');
    })
    it('should set a background image to the element supplied', () => {
      const mockElement = document.createElement('div');

      backgroundDirective.bind(mockElement, { value: {
        0: 'http://www.test.nl',
      }})

      expect(mockElement.style.backgroundImage).toBe("url(http://www.test.nl)");
    })
  })
})
