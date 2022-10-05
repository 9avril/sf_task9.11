const personGenerator = {
	surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров"
        }
    }`,
	firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
	firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Вероника",
            "id_2": "Анастасия",
            "id_3": "Екатерина",
            "id_4": "Ирина",
            "id_5": "Алина",
            "id_6": "Ульяна",
            "id_7": "Светлана",
            "id_8": "Елена",
            "id_9": "Ольга",
            "id_10": "Елизавета"
        }
    
    }`,

	maleProfessions: `{
		"count": 5,
		"list": {
			"id_1": "Пилот",
			"id_2": "Программист",
			"id_3": "Философ",
			"id_4": "Хирург",
			"id_5": "Гонщик"
		}

	}`,

	femaleProfessions: `{
		"count": 5,
		"list": {
			"id_1": "Няня",
			"id_2": "Швея",
			"id_3": "Косметолог",
			"id_4": "Педагог",
			"id_5": "Стюардесса"
		}
	}`,

	GENDER_MALE: 'Мужчина',
	GENDER_FEMALE: 'Женщина',

	randomIntNumber: (max = 1, min = 0) =>
		Math.floor(Math.random() * (max - min + 1) + min),

	randomValue: function(json) {
		const obj = JSON.parse(json)
		const prop = `id_${this.randomIntNumber(obj.count, 1)}` // this = personGenerator
		return obj.list[prop]
	},

	randomFirstName: function() {
		if (this.person.gender === this.GENDER_MALE) {
			return this.randomValue(this.firstNameMaleJson)
		} else {
			return this.randomValue(this.firstNameFemaleJson)
		}
	},

	randomSurname: function() {
		if (this.person.gender === this.GENDER_MALE) {
			return this.randomValue(this.surnameJson)
		} else {
			return this.randomValue(this.surnameJson) + 'a'
		}
	},

	randomDate: function() {
		return `${this.randomIntNumber(2022, 1945)} года рождения`
	},

	randomGender: function() {
		let randGen = this.randomIntNumber(1, 0)
		if (randGen === 1) {
			return this.GENDER_MALE
		} else {
			return this.GENDER_FEMALE
		}
	},

	randomMiddleName: function() {
		const randomMiddleName = this.randomValue(this.firstNameMaleJson)
		if (this.person.gender === this.GENDER_MALE) {
			if (randomMiddleName.includes('й')) {
				const changedMiddleName = randomMiddleName.replace('й', '')
				return changedMiddleName + 'евич'
			} else {
				return randomMiddleName + 'ович'
			}

		} else {
			if (randomMiddleName.includes('й')) {
				let changedFemaleMiddle = randomMiddleName.replace('й', '')
				return changedFemaleMiddle + 'евна'
			} else {
				return randomMiddleName + 'овна'
			}
		}
	},

	randomProfession: function() {
		if (this.person.gender === this.GENDER_MALE) {
			return this.randomValue(this.maleProfessions)
		} else
			return this.randomValue(this.femaleProfessions)
	},

	getPerson: function() {
		this.person = {}
		this.person.gender = this.randomGender()
		this.person.firstName = this.randomFirstName()
		this.person.surname = this.randomSurname()
		this.person.date = this.randomDate()
		this.person.middleName = this.randomMiddleName()
		this.person.profession = this.randomProfession()
		return this.person
	}
}