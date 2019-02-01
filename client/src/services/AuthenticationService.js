import Api from '@/services/Api'
export default{
	register(credentials){
		return Api().post('register',credentials)
	}
}

AuthenticationService.register({

	email:'seddik.tizit@gmail.com',
	password: 'Seddik1992'
})
