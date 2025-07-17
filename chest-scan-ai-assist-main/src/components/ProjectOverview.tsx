import { Brain, Stethoscope, Zap, Shield } from 'lucide-react';

const ProjectOverview = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              This tool uses{' '}
              <span className="font-semibold text-primary">EfficientNetB7</span>, a state-of-the-art 
              deep learning model, to classify chest X-rays into{' '}
              <span className="font-semibold text-success">Normal</span> or{' '}
              <span className="font-semibold text-warning">Abnormal</span>.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Built with{' '}
              <span className="font-semibold text-primary">TensorFlow and Keras</span>, it helps 
              radiologists speed up diagnosis and prioritize urgent cases. The model is trained on 
              high-resolution X-ray images and includes image preprocessing, dropout regularization, 
              and optimized learning rates for medical accuracy.
            </p>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Advanced AI Architecture</h4>
                  <p className="text-muted-foreground">EfficientNetB7 pretrained on ImageNet for superior feature extraction</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Stethoscope className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Medical-Grade Accuracy</h4>
                  <p className="text-muted-foreground">Fine-tuned on labeled chest X-ray datasets with clinical validation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Real-time Processing</h4>
                  <p className="text-muted-foreground">Instant analysis with confidence scores for rapid clinical decision-making</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Robust Training</h4>
                  <p className="text-muted-foreground">Data augmentation and regularization for reliable predictions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="lg:order-last">
            <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-semibold text-foreground mb-6">Model Architecture</h3>
              
              {/* Flow Diagram */}
              <div className="space-y-4">
                {/* Input */}
                <div className="bg-card rounded-lg p-4 shadow-sm border">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="font-medium">Input: Chest X-ray (JPEG)</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-primary/30"></div>
                </div>
                
                {/* Processing */}
                <div className="bg-card rounded-lg p-4 shadow-sm border">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-primary-light"></div>
                    <span className="font-medium">Preprocessing & Normalization</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-primary/30"></div>
                </div>
                
                {/* EfficientNet */}
                <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg p-4 shadow-sm border border-primary/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary-light"></div>
                    <span className="font-medium">EfficientNetB7 Feature Extraction</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-primary/30"></div>
                </div>
                
                {/* Output */}
                <div className="bg-card rounded-lg p-4 shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                      <span className="font-medium">Classification Result</span>
                    </div>
                    <div className="text-sm text-muted-foreground">95.2% confidence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;