const data = [
    {
      year: 2023,
      items: [
        {
          title: 'Инноватор Года',
          name: 'Алексей Чернов (Беларусь)',
          text: 'за внедрение технологии 3D-моделирования в пластической хирургии',
          name2: 'Олег Кириллов (Россия)',
          text2: 'за создание инновационного приложения для кожных заболеваний',
        },
        {
          title: 'Лучший Мастер Эстетической Медицины',
          name: 'Доктор Лариса Кузнецова (Украина)',
          text: 'за разработку новых методов в лечении акне и постакне',
          name2: 'Доктор Сергей Николаев (Россия)',
          text2: 'за инновации в технологии лазерного омоложения',
        },
        {
            title: 'Мастер года в Ногтевой Эстетике',
            name: 'Марина Жукова (Россия)',
            text: 'за интеграцию биоразлагаемых материалов в практику маникюра, способствующих устойчивому развитию',
            name2: 'Ксения Степанова (Украина)',
            text2: 'за разработку новаторских методик декоративного маникюра, сочетающих традиционные и современные техники',
        },
        {
            title: 'Прорыв Года',
            name: 'Ирина Петрова (Казахстан)',
            text: 'за внедрение передовых технологий в производство косметики',
            name2: 'Никита Васильев (Россия)',
            text2: 'за разработку уникальных методов в области неинвазивного омоложения',
        },
        {
            title: 'Мастер года в Перманентном Макияже',
            name: 'Виктория Семенова (Россия)',
            text: 'за создание новых методов в перманентном макияже, учитывающих индивидуальные особенности клиента',
            name2: 'Анна Куликова (Казахстан)',
            text2: 'за мастерство и инновации в микропигментации для восстановления внешнего вида после хирургических вмешательств',
        },
        {
            title: 'Парикмахер Года',
            name: 'Александр Сергеев (Россия)',
            text: 'за разработку экологически чистых и натуральных продуктов для ухода за волосами',
            name2: 'Татьяна Морозова (Украина)',
            text2: 'за внедрение инновационных подходов в создании свадебных и вечерних причесок',
        },
        {
          title: 'Визажист Года',
          name: 'Ирина Васильченко (Беларусь)',
          text: 'за разработку инновационных техник контуринга и создание авторской линии профессиональной косметики.',
          name2: 'София Ермакова (Россия)',
          text2: 'за разработку новых методик перманентного макияжа и микропигментации, улучшивших качество и безопасность процедур.',
      },
        {
            title: 'За Вклад в Развитие Индустрии',
            name: 'Михаил Васильев (Россия)',
            text: 'за вклад в создание инновационных решений для обучения и сертификации в индустрии красоты',
            name2: 'Елена Михайлова (Беларусь)',
            text2: 'за продвижение стандартов качества и безопасности в косметической индустрии',
        },

      ],
    },
    {
        year: 2022,
        items: [
          {
            title: 'Инноватор Года',
            name: 'Ирина Кожевникова (Казахстан)',
            text: 'за пионерское применение криотерапии в косметологии',
            name2: 'Владимир Смирнов (Россия)',
            text2: 'за разработку экологически чистых составов для косметики',
          },
          {
            title: 'Лучший Мастер Эстетической Медицины',
            name: 'Доктор Нина Богданова (Беларусь)',
            text: 'за прогресс в лечении хронических дерматологических заболеваний',
            name2: 'Доктор Артем Чернышов (Россия)',
            text2: 'за разработку новых методов нехирургической коррекции фигуры',
          },
          {
            title: 'Мастер года в Ногтевой Эстетике',
            name: 'Алексей Морозов (Россия)',
            text: 'за введение ультрамодных техник маникюра, использующих 3D-печать для создания ногтевых украшений',
            name2: 'Елена Белова (Казахстан)',
            text2: 'за создание серии обучающих программ для мастеров маникюра, распространяющих знания о безопасных практиках ухода за ногтями',
          },
          {
            title: 'Прорыв Года',
            name: 'Анна Сергеева (Россия)',
            text: 'за создание новаторских решений в области эко-косметики',
            name2: 'Тимур Гусейнов (Азербайджан)',
            text2: 'за прорывные методы в минимально инвазивной косметологии',
          },
          {
            title: 'Мастер года в Перманентном Макияже',
            name: 'Мария Чернова (Россия)',
            text: 'за применение передовых техник в микропигментации',
            name2: 'Ирина Васильева (Беларусь)',
            text2: 'за внедрение инновационных методов в перманентном макияже для коррекции асимметрии лица',
          },
          {
            title: 'Парикмахер Года',
            name: 'Николай Петров (Россия)',
            text: 'за разработку безопасных и эффективных методов химической завивки волос',
            name2: 'Марина Кузнецова (Беларусь)',
            text2: 'за прорыв в методах восстановления поврежденных волос',
          },
          {
            title: 'Визажист Года',
            name: 'Ольга Морозова (Россия)',
            text: 'за инновации в области аэромакияжа и разработку новых техник для киноиндустрии.',
            name2: 'Наталья Гончарова (Украина)',
            text2: 'за внедрение цифровых технологий в обучение визажистов и создание онлайн-платформы для профессионалов.',
        },
          {
            title: 'За Вклад в Развитие Индустрии',
            name: 'Виктория Смирнова (Россия)',
            text: 'за внедрение устойчивых и экологически чистых практик в производстве косметики',
            name2: 'Лариса Иванова (Казахстан)',
            text2: 'за разработку программ поддержки начинающих косметологов и эстетистов',
          },

        ],
      },
      {
        year: 2021,
        items: [
          {
            title: 'Инноватор Года',
            name: 'Наталья Петрова (Беларусь)',
            text: 'за инновационный подход в нехирургической ринопластике',
            name2: 'Тимур Бекмамбетов (Казахстан)',
            text2: 'за создание нового типа лазерной терапии для волос',
          },
          {
            title: 'Лучший Мастер Эстетической Медицины',
            name: 'Доктор Виктория Петрова (Казахстан)',
            text: 'за исключительные результаты в области эстетической регенеративной медицины',
            name2: 'Доктор Ольга Иванова (Россия)',
            text2: 'за введение инновационных методов восстановления кожи после хирургических вмешательств',
          },
          {
            title: 'Мастер года в Ногтевой Эстетике',
            name: 'Наталья Петрова (Беларусь)',
            text: 'за разработку метода быстрого и безопасного наращивания ногтей',
            name2: 'Ирина Козлова (Украина)',
            text2: 'за инновации в техниках биогеля и минеральных покрытий для укрепления ногтей',
          },
          {
            title: 'Прорыв Года',
            name: 'Карина Алексеева (Россия)',
            text: 'за внедрение использования искусственного интеллекта в разработке косметических продуктов',
            name2: 'Владислав Мельник (Беларусь)',
            text2: 'за разработку инновационных подходов к уходу за кожей лица',
          },
          {
            title: 'Мастер года в Перманентном Макияже',
            name: 'Наталия Козлова (Россия)',
            text: 'за внедрение новых технологий в создании естественного вида бровей',
            name2: 'Катерина Петрова (Украина)',
            text2: 'за разработку уникальных цветовых решений в перманентном макияже',
          },
          {
            title: 'Парикмахер Года',
            name: 'Сергей Иванов (Россия)',
            text: 'за инновации в технологиях укладки и окрашивания волос',
            name2: 'Екатерина Алексеева (Украина)',
            text2: 'за создание трендовых и оригинальных образов для модных показов и фотосессий',
          },
          {
            title: 'Визажист Года',
            name: 'Екатерина Беляева (Беларусь)',
            text: 'за внедрение экологически чистых продуктов в профессиональный макияж и продвижение принципов устойчивого развития.',
            name2: 'Диана Исмаилова (Казахстан)',
            text2: 'за создание уникальных образов для международных показов мод и сотрудничество с мировыми дизайнерами.',
        },
          {
            title: 'За Вклад в Развитие Индустрии',
            name: 'Юрий Николаев (Россия)',
            text: 'за значительный вклад в развитие местных брендов косметики',
            name2: 'Олег Петрович (Украина)',
            text2: 'за организацию международных симпозиумов и конференций по эстетической медицине',
          },

        ],
      },
      {
        year: 2020,
        items: [
          {
            title: 'Инноватор Года',
            name: 'Екатерина Васильева (Россия)',
            text: 'за внедрение персонализированных программ ухода за кожей',
            name2: 'Антон Иванов (Россия)',
            text2: 'за разработку умных устройств для анализа состояния кожи',
          },
          {
            title: 'Лучший Мастер Эстетической Медицины',
            name: 'Доктор Илья Коваленко (Украина)',
            text: 'за значительные достижения в области антивозрастной терапии',
            name2: 'Доктор Анастасия Сергеева (Россия)',
            text2: 'за разработку новой техники минимально инвазивной липоскульптуры',
          },
          {
            title: 'Мастер года в Ногтевой Эстетике',
            name: 'Светлана Иванова (Россия)',
            text: 'за разработку инновационных техник дизайна ногтей, включая использование экологически чистых материалов',
            name2: 'Ольга Павлова (Казахстан)',
            text2: 'за мастерство в создании уникальных ногтевых артов, с использованием авторских росписей',
          },
          {
            title: 'Прорыв Года',
            name: 'Михаил Андреев (Россия)',
            text: 'за создание нового типа органической косметики',
            name2: 'Яна Кирсанова (Украина)',
            text2: 'за исследования в области биодеградируемых материалов для косметики',
          },
          {
            title: 'Мастер года в Перманентном Макияже',
            name: 'Александра Иванова (Россия)',
            text: 'за мастерство в техниках микроблейдинга и микропигментации',
            name2: 'Елена Смирнова (Беларусь)',
            text2: 'за инновационный подход в перманентном макияже губ',
          },
          {
            title: 'Парикмахер Года',
            name: 'Дмитрий Новиков (Россия)',
            text: 'за создание уникальных причесок и разработку новых стайлинговых продуктов',
            name2: 'Ольга Петрова (Беларусь)',
            text2: 'за вклад в обучение и развитие молодых талантов в парикмахерском искусстве',
          },
          {
            title: 'Визажист Года',
            name: 'Лейла Гаджиева (Казахстан)',
            text: 'за создание персонализированных программ макияжа с учетом индивидуальных особенностей клиентов.',
            name2: 'Алина Кравченко (Украина)',
            text2: 'за мастерство в сфере свадебного макияжа и вклад в обучение молодых визажистов.',
        },
          {
            title: 'За Вклад в Развитие Индустрии',
            name: 'Наталья Королева (Россия)',
            text: 'за долгосрочное влияние на развитие косметической индустрии',
            name2: 'Андрей Жуков (Беларусь)',
            text2: 'за создание образовательной платформы для специалистов в области красоты',
          },

        ],
      },
  ];

  export default data;
