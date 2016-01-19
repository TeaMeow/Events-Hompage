$(function()
{
    var isMobile = /Mobi/.test(navigator.userAgent)
    
    
    
    
    /** 初始先隱藏背景和標語 */
    $('.background').addClass('cant see me')
    $('.ts.centered.massive.header').addClass('cant see me')
    
    
    setTimeout(function()
    {
        /** 翻轉標語動畫 */
        $('.ts.centered.massive.header').removeClass('cant see me')
                                        .addClass('animated slow flipInX')
                                        .one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", 
        function()
        {   
            /** 淡入背景動畫 */
            $('.background').removeClass('cant see me')
                            .addClass('animated slow fadeIn')
        })
    }, 200)
    

    if(!isMobile)
        $('.ts.centered.fluid.card .content').slideUp()
    
    

    $(window).scroll(function()
    {
        if(!isMobile)
        {
            if($('.ts.centered.fluid.card:not(.donezo):in-viewport(-400)').length > 0)
            {
                $('.ts.centered.fluid.card:not(.donezo)').each(function(index)
                {
                    var thisOne = $(this)
                    
                    $(this).addClass('donezo')
                   
                    setTimeout(function()
                    {
                        thisOne.find('.content').slideDown()
                    }, 100 * index);
                    
                })
            }
            

            if($('.ts.small.circular.centered.image:not(.donezo):in-viewport(-200)').length > 0) 
            {
                $('.ts.small.circular.centered.image:not(.donezo)').each(function(index) 
                {
                    var thisOne = $(this)
                    
                    $(this).addClass('donezo')
                   
                    setTimeout(function()
                    {
                        thisOne.removeClass('cant see me').addClass('animated flip')
                    }, 200 * index);
                    
                }) 
            }
        }
    });
})