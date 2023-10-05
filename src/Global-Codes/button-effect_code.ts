/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck

import { gsap } from 'gsap';
import $ from 'jquery';
import SplitType from 'split-type';

export default function initializeButtonEffect() {
  // Function to parse and set attributes with default values
  function attr<T>(defaultVal: T, attrVal: string | null): T {
    if (attrVal === null || attrVal.trim() === '') {
      return defaultVal;
    }

    if (typeof defaultVal === 'string') {
      return attrVal as T;
    }

    if (typeof defaultVal === 'number' && !isNaN(Number(attrVal))) {
      return +attrVal as T;
    }

    if (typeof defaultVal === 'boolean') {
      if (attrVal === 'true') {
        return true as T;
      }
      if (attrVal === 'false') {
        return false as T;
      }
    }

    return defaultVal;
  }

  // Initialize SplitType
  const splitType = new SplitType('[text-split]', {
    types: 'words, chars', // Corrected the typo here
    tagName: 'span',
  });

  // Iterate over elements with hoverstagger='link' attribute
  $("[hoverstagger='link']").each(function () {
    const text1 = $(this).find("[hoverstagger='text']").eq(0);
    const text2 = $(this).find("[hoverstagger='text']").eq(1);
    const durationSetting = attr(0.3, $(this).attr('hoverstagger-duration'));
    const staggerDuration = durationSetting * 0.6666666667;

    const tl = gsap.timeline({ paused: true });
    tl.to(text1.find('.char'), {
      yPercent: -100,
      duration: durationSetting,
      stagger: { amount: staggerDuration },
    });
    tl.from(
      text2.find('.char'),
      {
        yPercent: 100,
        duration: durationSetting,
        stagger: { amount: staggerDuration },
      },
      0
    );

    $(this).on('mouseenter', function () {
      tl.restart();
    });
  });
}
