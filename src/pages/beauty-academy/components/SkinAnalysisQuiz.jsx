import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkinAnalysisQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How does your skin feel by midday?",
      options: [
        { value: "oily", label: "Oily and shiny", icon: "Droplets" },
        { value: "normal", label: "Comfortable and balanced", icon: "Smile" },
        { value: "dry", label: "Tight and dry", icon: "Wind" },
        { value: "combination", label: "Oily T-zone, dry cheeks", icon: "Zap" }
      ]
    },
    {
      id: 2,
      question: "How often do you experience breakouts?",
      options: [
        { value: "frequently", label: "Frequently (weekly)", icon: "AlertCircle" },
        { value: "occasionally", label: "Occasionally (monthly)", icon: "Clock" },
        { value: "rarely", label: "Rarely (few times a year)", icon: "CheckCircle" },
        { value: "never", label: "Almost never", icon: "Shield" }
      ]
    },
    {
      id: 3,
      question: "How does your skin react to new products?",
      options: [
        { value: "sensitive", label: "Gets irritated easily", icon: "AlertTriangle" },
        { value: "tolerant", label: "Generally tolerates well", icon: "ThumbsUp" },
        { value: "reactive", label: "Sometimes reacts", icon: "HelpCircle" },
        { value: "resilient", label: "Rarely has reactions", icon: "Star" }
      ]
    }
  ];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    
    if (currentQuestion < questions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const getSkinTypeResult = () => {
    const answerValues = Object.values(answers);
    
    if (answerValues?.includes('oily') && answerValues?.includes('frequently')) {
      return {
        type: "Oily Skin",
        description: "Your skin produces excess oil and may be prone to breakouts. Focus on gentle cleansing and oil-free moisturizers.",
        recommendations: ["Oil-free cleanser", "Salicylic acid treatment", "Lightweight moisturizer", "Broad-spectrum SPF"],
        color: "text-blue-600"
      };
    } else if (answerValues?.includes('dry') || answerValues?.includes('sensitive')) {
      return {
        type: "Dry/Sensitive Skin",
        description: "Your skin needs extra hydration and gentle care. Avoid harsh ingredients and focus on barrier repair.",
        recommendations: ["Gentle cream cleanser", "Hyaluronic acid serum", "Rich moisturizer", "Mineral sunscreen"],
        color: "text-purple-600"
      };
    } else if (answerValues?.includes('combination')) {
      return {
        type: "Combination Skin",
        description: "Your skin has different needs in different areas. Use targeted treatments for each zone.",
        recommendations: ["Balanced cleanser", "Targeted treatments", "Lightweight moisturizer", "Daily SPF"],
        color: "text-green-600"
      };
    } else {
      return {
        type: "Normal Skin",
        description: "Your skin is well-balanced! Maintain your routine with gentle, consistent care.",
        recommendations: ["Gentle cleanser", "Vitamin C serum", "Daily moisturizer", "Broad-spectrum SPF"],
        color: "text-primary"
      };
    }
  };

  if (showResults) {
    const result = getSkinTypeResult();
    
    return (
      <div className="glass-card p-8 text-center">
        <div className="mb-6">
          <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-4" />
          <h3 className={`font-headline text-2xl font-bold mb-2 ${result?.color}`}>
            {result?.type}
          </h3>
          <p className="text-muted-foreground">
            {result?.description}
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-foreground mb-4">Recommended Products:</h4>
          <div className="grid grid-cols-2 gap-3">
            {result?.recommendations?.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Icon name="Check" size={16} className="text-success" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={resetQuiz}>
            Retake Quiz
          </Button>
          <Button variant="default">
            Book Consultation
          </Button>
        </div>
      </div>
    );
  }

  const question = questions?.[currentQuestion];
  const progress = ((currentQuestion + 1) / questions?.length) * 100;

  return (
    <div className="glass-card p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-headline text-xl font-semibold text-foreground">
            Skin Analysis Quiz
          </h3>
          <span className="text-sm text-muted-foreground">
            {currentQuestion + 1} of {questions?.length}
          </span>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2 mb-6">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="mb-8">
        <h4 className="font-semibold text-lg text-foreground mb-6">
          {question?.question}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question?.options?.map((option) => (
            <button
              key={option?.value}
              onClick={() => handleAnswer(option?.value)}
              className="glass-panel p-4 text-left hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 morph-hover group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={option?.icon} size={20} className="text-primary" />
                </div>
                <span className="font-medium text-foreground">
                  {option?.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinAnalysisQuiz;