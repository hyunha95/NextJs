import { Checkbox } from '@mui/material'
import ContentLoader from 'react-content-loader'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

type MyFormData = {
	firstName: string
	lastName: string
	category: string
	isChecked: boolean
}

export default function MyForm() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<MyFormData>()
	const onSubmit: SubmitHandler<MyFormData> = (data) => {
		console.log(data)
	}

	return (
		<>
			<ContentLoader viewBox='0 038070'>
				<rect x='0' y='0' ry='5' width='70' height='70' />
				<rect x='80' y='17' ry='4' width='300' height='13' />
				<rect x='80' y='40' ry='3' width='250' height='10s' />
			</ContentLoader>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('firstName', { required: true })}
					placeholder='이름'
				/>
				{errors.firstName && <div>이름을 입력해 주십시오</div>}
				<input {...register('lastName', { required: true })} placeholder='성' />
				{errors.lastName && <div>성을 입력해 주십시오</div>}
				<select {...register('category', { required: true })}>
					<option value=''>선택...</option>
					<option value='A'>카테고리</option>
					<option value='B'>카테고리</option>
				</select>
				{errors.category && <div>카태고리를 선택해 주십시오</div>}

				<Controller
					name='isChecked'
					control={control}
					defaultValue={false}
					rules={{ required: true }}
					render={({ field: { onChange, value } }) => (
						<Checkbox onChange={onChange} value={value} />
					)}
				/>
				{errors.isChecked && <label>체크해 주십시오</label>}
				<input type='submit' />
			</form>
		</>
	)
}
