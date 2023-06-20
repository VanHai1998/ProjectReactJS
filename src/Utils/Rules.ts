import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'
type rule = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValues?: UseFormGetValues<any>): rule => ({
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email khong dung dinh dang'
    },
    maxLength: {
      value: 160,
      message: `Độ dài từ 5- 160 ký tự`
    },
    minLength: {
      value: 5,
      message: `Độ dài từ 5- 160 ký tự`
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 160,
      message: `Độ dài từ 6- 160 ký tự`
    },
    minLength: {
      value: 6,
      message: `Độ dài từ 6- 160 ký tự`
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm_password is required'
    },
    maxLength: {
      value: 160,
      message: `Độ dài từ 6- 160 ký tự`
    },
    minLength: {
      value: 6,
      message: `Độ dài từ 6- 160 ký tự`
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại password không khớp'
        : undefined
  }
})

function testPriceMinMax(this: yup.TestContext<yup.AnyObject>) {
  const { price_min, price_max } = this.parent as { price_max: string; price_min: string }
  if (price_min !== '' && price_max !== '') {
    return Number(price_max) >= Number(price_min)
  }
  return price_min !== '' || price_max !== ''
}
export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Email khong dung dinh dang')
    .min(5, 'Độ dài từ 5- 160 ký tự')
    .max(160, 'Độ dài từ 5- 160 ký tự'),
  password: yup
    .string()
    .required('Password is required')
    .max(160, 'Độ dài từ 6- 160 ký tự')
    .min(6, 'Độ dài từ 5- 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Confirm_password is required')
    .min(6, 'Độ dài từ 5- 160 ký tự')
    .max(160, 'Độ dài từ 5- 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp'),
  price_min: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không phù hợp',
    test: testPriceMinMax
  }),
  price_max: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không phù hợp',
    test: testPriceMinMax
  }),
  name: yup.string().trim().required('Tên sản phẩm là bắt buộc')
})

export type Schema = yup.InferType<typeof schema>