export {default as _} from 'lodash'

import reactDatePicker from 'react-datepicker'
import { createFactory as fact, createElement as $, cloneElement } from 'react'
import { Motion as motion, StaggeredMotion as smotion, TransitionMotion as tmotion } from 'react-motion'
export { spring } from 'react-motion'

import hammer from 'react-hammerjs'
export const Hammer = fact(hammer)

import {VirtualScroll as vs} from 'react-virtualized'
export const VirtualScroll = fact(vs)

export const Motion = fact(motion), StaggeredMotion = fact(smotion), TransitionMotion = fact(tmotion)
export { Motion, StaggeredMotion, TransitionMotion }

export { fact, $ }

export const a = fact('a')
export const p = fact('p')
export const b = fact('b')
export const i = fact('i')
export const h1 = fact('h1')
export const h2 = fact('h2')
export const h3 = fact('h3')
export const h4 = fact('h4')
export const h5 = fact('h5')
export const h6 = fact('h6')
export const div = fact('div')
export const img = fact('img')
export const form = fact('form')
export const text = fact('text')
export const span = fact('span')
export const input = fact('input')
export const textarea = fact('textarea')
export const label = fact('label')
export const button = fact('button')
export const option = fact('option')
export const br = fact('br')
export const DatePicker = fact(reactDatePicker)

export const clone = (component, props, ...children) => {
    return cloneElement(component || div({}), props, ...children)
}

import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
export const transition = (opts, ...children) => {
    return $(TransitionGroup, {
        ...{
            transitionAppearTimeout: 0,
            transitionEnterTimeout: 0,
            transitionLeaveTimeout: 0
        },
        ...opts
    }, ...children);
}
