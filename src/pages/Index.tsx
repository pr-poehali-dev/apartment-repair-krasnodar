import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [area, setArea] = useState([50]);
  const [selectedWorks, setSelectedWorks] = useState<string[]>([]);
  const [materialQuality, setMaterialQuality] = useState('standard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discount, setDiscount] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setDiscount(prev => prev > 0 ? prev - 1 : 0);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: 'Home',
      title: 'Косметический ремонт',
      description: 'Преобразим вашу квартиру без пыли и переплат. Идеально для сдачи в аренду',
      price: 'от 2000 ₽/м²',
      popular: false
    },
    {
      icon: 'Hammer',
      title: 'Капитальный ремонт',
      description: 'Создадим квартиру вашей мечты с нуля. Гарантия 3 года на все работы',
      price: 'от 5000 ₽/м²',
      popular: true
    },
    {
      icon: 'Sparkles',
      title: 'Дизайнерский ремонт',
      description: 'Эксклюзивный интерьер премиум-класса. Увеличьте стоимость недвижимости на 30%',
      price: 'от 8000 ₽/м²',
      popular: false
    },
    {
      icon: 'Wrench',
      title: 'Ремонт под ключ',
      description: 'Забудьте о стройке! Переезжайте в готовую квартиру через 2 месяца',
      price: 'от 4500 ₽/м²',
      popular: false
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/d5b552e5-13f6-46a2-a087-ccf81e96724b/files/a350b7ad-ff42-4fa2-be01-15fadfcb18b5.jpg',
      title: 'ЖК «Панорама»',
      area: '65 м²',
      time: '2 месяца',
      cost: '320 000 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d5b552e5-13f6-46a2-a087-ccf81e96724b/files/a3efc35f-4acc-4fc8-8f7f-2c8c4086e9ee.jpg',
      title: 'Студия в центре',
      area: '42 м²',
      time: '1.5 месяца',
      cost: '210 000 ₽'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d5b552e5-13f6-46a2-a087-ccf81e96724b/files/94c9dba4-e7ff-468a-8094-e2f839515ffa.jpg',
      title: 'Премиум санузел',
      area: '8 м²',
      time: '3 недели',
      cost: '95 000 ₽'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Бесплатная консультация',
      description: 'Выезд замерщика в удобное время. Составим 3D-визуализацию вашей квартиры'
    },
    {
      number: '02',
      title: 'Прозрачная смета',
      description: 'Фиксируем цену в договоре. Никаких доплат и скрытых платежей'
    },
    {
      number: '03',
      title: 'Материалы со скидкой',
      description: 'Покупаем у проверенных поставщиков на 20% дешевле розницы'
    },
    {
      number: '04',
      title: 'Работа по графику',
      description: 'Ежедневные фото-отчёты. Сдаём объект точно в срок или платим неустойку'
    },
    {
      number: '05',
      title: 'Гарантия 3 года',
      description: 'Генеральная уборка в подарок. Бесплатно устраним любые недочёты'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Наконец нашла ответственных! Ремонт 3-комнатной сделали за 2 месяца день в день. Цена не изменилась ни на рубль. Теперь рекомендую всем знакомым!',
      date: '15 ноября 2024',
      location: 'ЖК «Панорама»'
    },
    {
      name: 'Дмитрий Соколов',
      rating: 5,
      text: 'Делал ремонт под сдачу в аренду. Ребята сами подобрали материалы, уложились в бюджет. Квартиру сдал за 35 тыс/мес! Окупается за год.',
      date: '3 октября 2024',
      location: 'ул. Красная'
    },
    {
      name: 'Елена Краснова',
      rating: 5,
      text: 'Ванная комната — просто восторг! Жалко было закрывать такую красоту дверью 😊 Качество работ идеальное, всё работает безупречно уже полгода.',
      date: '22 сентября 2024',
      location: 'ЖК «Адмирал»'
    }
  ];

  const workTypes = [
    { id: 'demolition', label: 'Демонтаж', price: 500 },
    { id: 'electricity', label: 'Электрика', price: 800 },
    { id: 'plumbing', label: 'Сантехника', price: 700 },
    { id: 'walls', label: 'Выравнивание стен', price: 600 },
    { id: 'flooring', label: 'Напольное покрытие', price: 900 },
    { id: 'ceiling', label: 'Потолки', price: 700 },
    { id: 'painting', label: 'Покраска/обои', price: 500 },
    { id: 'doors', label: 'Установка дверей', price: 400 }
  ];

  const materialPrices = {
    economy: 1,
    standard: 1.5,
    premium: 2.5
  };

  const calculateCost = () => {
    let baseCost = 0;
    selectedWorks.forEach(workId => {
      const work = workTypes.find(w => w.id === workId);
      if (work) {
        baseCost += work.price;
      }
    });
    
    const materialMultiplier = materialPrices[materialQuality as keyof typeof materialPrices];
    const totalCost = baseCost * area[0] * materialMultiplier;
    
    return Math.round(totalCost);
  };

  const handleWorkToggle = (workId: string) => {
    setSelectedWorks(prev =>
      prev.includes(workId)
        ? prev.filter(id => id !== workId)
        : [...prev, workId]
    );
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Заявка принята!',
      description: 'Менеджер перезвонит вам через 5 минут',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={28} />
            <span className="text-xl font-bold">РемонтКраснодар</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('calculator')} className="text-sm hover:text-primary transition-colors">Калькулятор</button>
            <button onClick={() => scrollToSection('steps')} className="text-sm hover:text-primary transition-colors">Этапы</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden md:flex" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (861) 123-45-67
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-sm animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('calculator')} className="text-left hover:text-primary transition-colors">Калькулятор</button>
              <button onClick={() => scrollToSection('steps')} className="text-left hover:text-primary transition-colors">Этапы</button>
              <button onClick={() => scrollToSection('reviews')} className="text-left hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-left hover:text-primary transition-colors">Контакты</button>
              <Button onClick={() => scrollToSection('contacts')} className="w-full">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (861) 123-45-67
              </Button>
            </nav>
          </div>
        )}
      </header>

      {discount > 0 && (
        <div className="fixed top-20 right-4 z-40 animate-scale-in">
          <Card className="bg-destructive text-white border-none shadow-2xl">
            <CardContent className="p-4 flex items-center gap-3">
              <Icon name="Clock" size={24} />
              <div>
                <div className="font-bold">Скидка 15% сгорает!</div>
                <div className="text-sm">Осталось {discount} мин</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-destructive text-white hover:bg-destructive/90 animate-pulse">
                🔥 Акция! Скидка 15% на первый заказ
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ремонт квартир в Краснодаре
                <span className="text-primary"> без переплат</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Фиксируем цену в договоре. Сдаём точно в срок или <strong>платим неустойку 1000₽/день</strong>. Гарантия 3 года.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 animate-pulse" onClick={() => scrollToSection('calculator')}>
                  <Icon name="Calculator" size={20} />
                  Рассчитать скидку
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => scrollToSection('portfolio')}>
                  <Icon name="Image" size={20} />
                  300+ проектов
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-primary">300+</div>
                  <div className="text-xs text-muted-foreground">Квартир сдано</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-xs text-muted-foreground">Лет на рынке</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-xs text-muted-foreground">Рейтинг на 2GIS</div>
                </Card>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/d5b552e5-13f6-46a2-a087-ccf81e96724b/files/a350b7ad-ff42-4fa2-be01-15fadfcb18b5.jpg"
                alt="Современная квартира после ремонта"
                className="rounded-2xl shadow-2xl animate-scale-in"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-2 border-primary animate-pulse">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-primary" size={32} />
                  <div>
                    <div className="font-bold text-lg">Гарантия 3 года</div>
                    <div className="text-sm text-primary font-semibold">В договоре!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Что мы делаем</Badge>
            <h2 className="text-4xl font-bold mb-4">Услуги с фиксацией цены</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Стоимость не изменится после подписания договора. Все риски берём на себя.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow hover-scale relative">
                {service.popular && (
                  <Badge className="absolute -top-3 -right-3 bg-destructive text-white z-10">ХИТ</Badge>
                )}
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="min-h-[60px]">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                  <Button className="w-full" variant="outline" size="sm" onClick={() => scrollToSection('calculator')}>
                    Рассчитать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Реальные проекты</Badge>
            <h2 className="text-4xl font-bold mb-4">Посмотрите, как мы работаем</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              300+ счастливых владельцев новых квартир в Краснодаре. Возможно, ваш дом тоже здесь!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-primary shadow-lg">
                    {project.cost}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Home" size={14} />
                      {project.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {project.time}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-destructive text-white animate-pulse">🔥 Скидка 15% сегодня</Badge>
              <h2 className="text-4xl font-bold mb-4">Узнайте стоимость за 30 секунд</h2>
              <p className="text-lg text-muted-foreground">
                Точный расчёт с учётом всех работ и материалов. <strong>Без скрытых платежей!</strong>
              </p>
            </div>
            <Card className="border-2 border-primary">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center justify-between">
                  <span>Параметры ремонта</span>
                  <Badge className="bg-destructive text-white">{discount > 0 ? `-15%` : 'Акция закончилась'}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="font-medium">Площадь помещения</label>
                    <span className="text-primary font-bold">{area[0]} м²</span>
                  </div>
                  <Slider
                    value={area}
                    onValueChange={setArea}
                    min={10}
                    max={200}
                    step={5}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>10 м²</span>
                    <span>200 м²</span>
                  </div>
                </div>

                <div>
                  <label className="font-medium mb-3 block">Виды работ</label>
                  <div className="grid grid-cols-2 gap-3">
                    {workTypes.map((work) => (
                      <div key={work.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={work.id}
                          checked={selectedWorks.includes(work.id)}
                          onCheckedChange={() => handleWorkToggle(work.id)}
                        />
                        <label
                          htmlFor={work.id}
                          className="text-sm cursor-pointer"
                        >
                          {work.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-medium mb-3 block">Качество материалов</label>
                  <Tabs value={materialQuality} onValueChange={setMaterialQuality}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="economy">Эконом</TabsTrigger>
                      <TabsTrigger value="standard">Стандарт</TabsTrigger>
                      <TabsTrigger value="premium">Премиум</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="border-t pt-6 bg-muted/30 -m-6 p-6 mt-6 rounded-b-lg">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Стоимость ремонта</div>
                      <div className="flex items-baseline gap-3">
                        {discount > 0 && (
                          <span className="text-2xl text-muted-foreground line-through">
                            {Math.round(calculateCost() / 0.85).toLocaleString('ru-RU')} ₽
                          </span>
                        )}
                        <div className="text-4xl font-bold text-primary">
                          {discount > 0 ? calculateCost().toLocaleString('ru-RU') : calculateCost().toLocaleString('ru-RU')} ₽
                        </div>
                        {discount > 0 && (
                          <Badge className="bg-destructive text-white">-15%</Badge>
                        )}
                      </div>
                      {discount > 0 && (
                        <p className="text-sm text-destructive font-semibold mt-2">
                          Вы экономите: {Math.round(calculateCost() * 0.15).toLocaleString('ru-RU')} ₽!
                        </p>
                      )}
                    </div>
                    <Button size="lg" className="w-full gap-2 animate-pulse" onClick={() => scrollToSection('contacts')}>
                      <Icon name="Send" size={20} />
                      Получить скидку 15%
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      🔒 Цена фиксируется в договоре. Бесплатный замер и консультация.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="steps" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Как мы работаем</Badge>
            <h2 className="text-4xl font-bold mb-4">Прозрачность на каждом этапе</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Вы всегда знаете, что происходит на объекте. Ежедневные фотоотчёты в WhatsApp.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0 animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b last:border-b-0">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Реальные отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              98% клиентов рекомендуют нас своим друзьям и знакомым
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <Icon name="Quote" size={20} className="text-primary/20" />
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-xs flex items-center gap-2">
                    <Icon name="MapPin" size={12} />
                    {review.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3 leading-relaxed">{review.text}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              <Icon name="ExternalLink" size={20} />
              Все отзывы на 2GIS
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-destructive text-white animate-pulse">🔥 Скидка 15% сегодня!</Badge>
              <h2 className="text-4xl font-bold mb-4">Получите бесплатный замер</h2>
              <p className="text-lg text-muted-foreground">
                Перезвоним через <strong>5 минут</strong> и расскажем, как сэкономить на ремонте
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Gift" className="text-primary" />
                    Оставьте заявку сейчас
                  </CardTitle>
                  <CardDescription>И получите скидку 15% + бесплатный 3D-дизайн</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон *" required />
                    </div>
                    <div>
                      <Textarea placeholder="Ваш адрес (необязательно)" rows={2} />
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span>Перезвоним через 5 минут</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span>Бесплатный выезд замерщика</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span>Скидка 15% гарантирована</span>
                      </div>
                    </div>
                    <Button type="submit" className="w-full gap-2 h-12 text-base animate-pulse">
                      <Icon name="Send" size={20} />
                      Получить скидку 15%
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-primary text-white border-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Icon name="Phone" />
                      Позвоните сейчас!
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+78611234567" className="text-2xl font-bold hover:opacity-80 transition-opacity block">
                      +7 (861) 123-45-67
                    </a>
                    <p className="text-sm mt-2 opacity-90">🕒 Ежедневно с 9:00 до 21:00</p>
                    <p className="text-sm mt-1 opacity-90">⚡ Среднее время ожидания: 30 сек</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageCircle" className="text-primary" />
                      Напишите в мессенджер
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-3">
                      <Icon name="MessageCircle" className="text-green-600" size={20} />
                      WhatsApp: +7 (861) 123-45-67
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3">
                      <Icon name="Send" className="text-blue-500" size={20} />
                      Telegram: @remont_krd
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" className="text-primary" />
                      Приезжайте в офис
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-lg">г. Краснодар</p>
                    <p className="text-sm text-muted-foreground mb-3">ул. Красная, 123, офис 45</p>
                    <p className="text-sm">📍 5 минут от метро «Площадь Труда»</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="font-bold text-lg">РемонтКраснодар</span>
              </div>
              <p className="text-sm opacity-80">
                Качественный ремонт квартир под ключ с гарантией до 3 лет
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Косметический ремонт</li>
                <li>Капитальный ремонт</li>
                <li>Дизайнерский ремонт</li>
                <li>Ремонт под ключ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#portfolio" className="hover:opacity-100">Портфолио</a></li>
                <li><a href="#calculator" className="hover:opacity-100">Калькулятор</a></li>
                <li><a href="#reviews" className="hover:opacity-100">Отзывы</a></li>
                <li><a href="#contacts" className="hover:opacity-100">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (861) 123-45-67</li>
                <li>info@remont-krd.ru</li>
                <li>г. Краснодар, ул. Красная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 РемонтКраснодар. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;