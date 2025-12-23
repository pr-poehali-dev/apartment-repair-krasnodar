import { useState } from 'react';
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

  const services = [
    {
      icon: 'Home',
      title: 'Косметический ремонт',
      description: 'Освежим внешний вид квартиры: покраска, обои, мелкие работы',
      price: 'от 2000 ₽/м²'
    },
    {
      icon: 'Hammer',
      title: 'Капитальный ремонт',
      description: 'Полная перепланировка с заменой коммуникаций',
      price: 'от 5000 ₽/м²'
    },
    {
      icon: 'Sparkles',
      title: 'Дизайнерский ремонт',
      description: 'Премиум материалы и индивидуальный дизайн-проект',
      price: 'от 8000 ₽/м²'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт под ключ',
      description: 'Все работы от проекта до уборки в одном договоре',
      price: 'от 4500 ₽/м²'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/d5b552e5-13f6-46a2-a087-ccf81e96724b/files/a350b7ad-ff42-4fa2-be01-15fadfcb18b5.jpg',
      title: 'Современная квартира',
      area: '65 м²',
      time: '2 месяца'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d5b552e5-13f6-46a2-a087-ccf81e96724b/files/a3efc35f-4acc-4fc8-8f7f-2c8c4086e9ee.jpg',
      title: 'Кухня-гостиная',
      area: '42 м²',
      time: '1.5 месяца'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d5b552e5-13f6-46a2-a087-ccf81e96724b/files/94c9dba4-e7ff-468a-8094-e2f839515ffa.jpg',
      title: 'Ванная комната',
      area: '8 м²',
      time: '3 недели'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Выезд мастера, замеры, обсуждение пожеланий'
    },
    {
      number: '02',
      title: 'Смета и договор',
      description: 'Точный расчёт стоимости и сроков работ'
    },
    {
      number: '03',
      title: 'Закупка материалов',
      description: 'Подбор и доставка материалов на объект'
    },
    {
      number: '04',
      title: 'Ремонтные работы',
      description: 'Выполнение всех этапов с контролем качества'
    },
    {
      number: '05',
      title: 'Сдача объекта',
      description: 'Финальная уборка и приёмка работ'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличная работа! Сделали ремонт квартиры за 2 месяца. Все чётко по договору, без срывов сроков.',
      date: '15 ноября 2024'
    },
    {
      name: 'Дмитрий Соколов',
      rating: 5,
      text: 'Качество на высоте, цены адекватные. Особенно понравилось, что помогли с выбором материалов.',
      date: '3 октября 2024'
    },
    {
      name: 'Елена Краснова',
      rating: 5,
      text: 'Делали ванную под ключ. Результат превзошёл ожидания! Спасибо мастерам за профессионализм.',
      date: '22 сентября 2024'
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
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
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
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
            <a href="#calculator" className="text-sm hover:text-primary transition-colors">Калькулятор</a>
            <a href="#steps" className="text-sm hover:text-primary transition-colors">Этапы</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (861) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                Качественный ремонт в Краснодаре
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ремонт квартир под ключ
              </h1>
              <p className="text-xl text-muted-foreground">
                Современные технологии, проверенные материалы и гарантия до 3 лет. Превратим вашу квартиру в идеальное пространство.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Calculator" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Image" size={20} />
                  Смотреть работы
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">300+</div>
                  <div className="text-sm text-muted-foreground">Объектов сдано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/d5b552e5-13f6-46a2-a087-ccf81e96724b/files/a350b7ad-ff42-4fa2-be01-15fadfcb18b5.jpg"
                alt="Современная квартира после ремонта"
                className="rounded-2xl shadow-2xl animate-scale-in"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-primary" size={32} />
                  <div>
                    <div className="font-bold">Гарантия качества</div>
                    <div className="text-sm text-muted-foreground">До 3 лет</div>
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
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выполняем все виды ремонтных работ: от косметического до премиального
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Посмотрите на реализованные проекты наших мастеров
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
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
              <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
              <p className="text-lg text-muted-foreground">
                Рассчитайте приблизительную стоимость ремонта вашей квартиры
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Параметры ремонта</CardTitle>
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

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Приблизительная стоимость</div>
                      <div className="text-4xl font-bold text-primary">
                        {calculateCost().toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <Button size="lg" className="gap-2">
                      <Icon name="Send" size={20} />
                      Отправить заявку
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    * Точная стоимость определяется после выезда специалиста на объект
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="steps" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Этапы работ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс работы от заявки до сдачи объекта
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
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют сотни довольных клиентов в Краснодаре
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                  <CardDescription>Мы перезвоним в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" required />
                    </div>
                    <div>
                      <Textarea placeholder="Комментарий (необязательно)" rows={3} />
                    </div>
                    <Button type="submit" className="w-full gap-2">
                      <Icon name="Send" size={18} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Phone" className="text-primary" />
                      Телефон
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+78611234567" className="text-lg font-semibold hover:text-primary transition-colors">
                      +7 (861) 123-45-67
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Mail" className="text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@remont-krd.ru" className="text-lg font-semibold hover:text-primary transition-colors">
                      info@remont-krd.ru
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" className="text-primary" />
                      Адрес
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">г. Краснодар</p>
                    <p className="text-sm text-muted-foreground">ул. Красная, 123, офис 45</p>
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
