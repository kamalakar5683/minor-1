import { CheckCircle, Brain, Zap, Upload, BarChart3, Shield, Clock, Repeat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "EfficientNetB7 Architecture",
      description: "Pretrained on ImageNet with advanced neural network optimization for medical imaging",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Fine-tuned Training",
      description: "Specialized training on labeled chest X-ray datasets for medical accuracy",
      color: "text-primary-light"
    },
    {
      icon: CheckCircle,
      title: "Binary Classification",
      description: "Clear Normal vs Abnormal classification with confidence scoring",
      color: "text-success"
    },
    {
      icon: Repeat,
      title: "Data Augmentation",
      description: "Horizontal flip and normalization techniques for robust training",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Confidence Scoring",
      description: "Softmax sigmoid-based output with detailed confidence percentages",
      color: "text-primary-light"
    },
    {
      icon: Clock,
      title: "Real-time Prediction",
      description: "Live prediction visualization with instant diagnostic feedback",
      color: "text-warning"
    },
    {
      icon: Upload,
      title: "JPEG File Support",
      description: "Seamless upload and processing of standard medical imaging formats",
      color: "text-success"
    },
    {
      icon: BarChart3,
      title: "Training Visualization",
      description: "Matplotlib accuracy plots showing model performance metrics",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "One-click Inference",
      description: "Simple model inference with immediate result feedback and analysis",
      color: "text-primary-light"
    },
    {
      icon: Shield,
      title: "Medical Validation",
      description: "Optimized with dropout regularization for reliable clinical use",
      color: "text-success"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Key <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced AI capabilities designed specifically for medical professionals and radiological diagnosis
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Icon with checkmark overlay */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-light/20 transition-all duration-300`}>
                      <feature.icon className={`w-6 h-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    {/* Checkmark indicator */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-success-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Technical Specifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">TensorFlow</div>
              <div className="text-sm text-muted-foreground">Deep Learning Framework</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light mb-2">Keras</div>
              <div className="text-sm text-muted-foreground">High-level API</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">EfficientNetB7</div>
              <div className="text-sm text-muted-foreground">Neural Architecture</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">Binary</div>
              <div className="text-sm text-muted-foreground">Classification Type</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;