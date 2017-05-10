import axios from 'axios';

let base = '';

export const requestLogin = params => { 
	return axios.post(`${base}/login`, params).then(res => res.data);
};

export const requestProject = params => { 
	return axios.get(`${base}/selectProject`, { params: params });
};

export const requestgetTalNumber = params => { 

	return axios.get(`${base}/numerical`, { params: params });
};

export const requestgetprojectList = params => { 

	return axios.get(`${base}/projectList`, { params: params });
};


