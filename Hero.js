class Hero {
  constructor(x,y,r)
	{
		var options = { 
			isStatic:false,
			density: 1.2,
			friction: 0.5,
			restitution:0.3
		};
		this.x=x;
		this.y=y;
		this.r=r;
		

		this.scale=0.5
		this.body=Matter.Bodies.circle(this.x, this.y, (this.r)/2, options,[5]);
		
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
