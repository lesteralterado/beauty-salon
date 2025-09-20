import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Image from '../../../components/AppImage';

const MessagingCenter = ({ conversations, onSendMessage, onStartNewConversation }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations?.filter(conv =>
    conv?.stylist?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    conv?.lastMessage?.content?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 168) { // 7 days
      return date?.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const handleSendMessage = () => {
    if (newMessage?.trim() && selectedConversation) {
      onSendMessage(selectedConversation?.id, newMessage?.trim());
      setNewMessage('');
    }
  };

  const ConversationList = () => (
    <div className="h-full flex flex-col">
      {/* Search */}
      <div className="p-4 border-b border-white/10">
        <Input
          type="search"
          placeholder="Search conversations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
          className="w-full"
        />
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations?.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="MessageCircle" size={24} className="text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">No conversations yet</p>
            <Button
              variant="default"
              size="sm"
              iconName="Plus"
              iconPosition="left"
              onClick={onStartNewConversation}
            >
              Start Conversation
            </Button>
          </div>
        ) : (
          <div className="space-y-1 p-2">
            {filteredConversations?.map((conversation) => (
              <div
                key={conversation?.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 morph-hover ${
                  selectedConversation?.id === conversation?.id
                    ? 'bg-primary/10 border border-primary/20' :'hover:bg-white/5'
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={conversation?.stylist?.avatar}
                        alt={conversation?.stylist?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {conversation?.stylist?.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-foreground truncate">
                        {conversation?.stylist?.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {formatTime(conversation?.lastMessage?.timestamp)}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation?.lastMessage?.isFromStylist ? '' : 'You: '}
                      {conversation?.lastMessage?.content}
                    </p>
                    
                    {conversation?.unreadCount > 0 && (
                      <div className="mt-2">
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs rounded-full">
                          {conversation?.unreadCount}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const ChatWindow = () => {
    if (!selectedConversation) {
      return (
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={32} className="text-muted-foreground" />
            </div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
              Select a Conversation
            </h3>
            <p className="text-muted-foreground">
              Choose a stylist to start messaging
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={selectedConversation?.stylist?.avatar}
                  alt={selectedConversation?.stylist?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {selectedConversation?.stylist?.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-white" />
              )}
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">
                {selectedConversation?.stylist?.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {selectedConversation?.stylist?.isOnline ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="Phone"
            />
            <Button
              variant="ghost"
              size="sm"
              iconName="Video"
            />
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {selectedConversation?.messages?.map((message) => (
            <div
              key={message?.id}
              className={`flex ${message?.isFromStylist ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message?.isFromStylist
                  ? 'bg-white/10 text-foreground'
                  : 'bg-primary text-white'
              }`}>
                <p className="text-sm">{message?.content}</p>
                <p className={`text-xs mt-1 ${
                  message?.isFromStylist ? 'text-muted-foreground' : 'text-white/70'
                }`}>
                  {formatTime(message?.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Message Input */}
        <div className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button
              variant="default"
              iconName="Send"
              onClick={handleSendMessage}
              disabled={!newMessage?.trim()}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="glass-card mb-8 overflow-hidden" style={{ height: '600px' }}>
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <h2 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
          <Icon name="MessageCircle" size={24} className="text-primary" />
          Messages
        </h2>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          onClick={onStartNewConversation}
        >
          New Chat
        </Button>
      </div>
      <div className="flex h-full">
        {/* Conversation List */}
        <div className="w-full lg:w-1/3 border-r border-white/10">
          <ConversationList />
        </div>

        {/* Chat Window */}
        <div className="hidden lg:block lg:w-2/3">
          <ChatWindow />
        </div>
      </div>
      {/* Mobile Chat Overlay */}
      {selectedConversation && (
        <div className="lg:hidden fixed inset-0 bg-background z-50">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Button
              variant="ghost"
              size="sm"
              iconName="ArrowLeft"
              onClick={() => setSelectedConversation(null)}
            />
            <h3 className="font-medium text-foreground">
              {selectedConversation?.stylist?.name}
            </h3>
            <div />
          </div>
          <div className="h-full">
            <ChatWindow />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagingCenter;