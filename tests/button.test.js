/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import Button from '@packages/button/src/main.vue';
import sinon from 'sinon';

describe('Button', () => {
  const wrapper = mount(Button);

  test('Vue 实例', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.is('a')).toBeTruthy();
  });

  test('没有 Props', () => {
    const selectors = [
      '.m-button',
      '.m-button__default',
      '.m-button__normal'
    ];
    for (let selector of selectors) {
      expect(wrapper.contains(selector)).toBeTruthy();
    }
  });

  test('click 事件', () => {
    const spy = sinon.spy();
    const clickWrapper = mount(Button, {
      propsData: {
        click: spy
      }
    });
    // 触发点击事件
    clickWrapper.find('.m-button').trigger('click');

    // 判断点击事件是否被触发
    expect(clickWrapper.emitted().click).toBeTruthy();
  });

});

describe('Button Props', () => {
  const wrapper = mount(Button);
  wrapper.setProps({
    type: 'large',
    inline: true,
    disabled: true
  });
  test('多个 Props', () => {
    const selectors = [
      '.m-button',
      '.m-button__large',
      '.m-button__inline',
      '.m-button__disabled'
    ];
    for (let selector of selectors) {
      expect(wrapper.contains(selector)).toBeTruthy();
    }
  });
});
